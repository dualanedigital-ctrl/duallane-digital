import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request), RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json(
      { error: "Trop de demandes. Veuillez réessayer dans quelques minutes." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
  const businessType = typeof body.businessType === "string" ? body.businessType.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return NextResponse.json(
      { error: "Le message doit contenir au moins 10 caractères." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY est manquante — configure-la dans .env.local");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas encore configuré. Contactez-nous par email." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: `DualLane Digital <${FROM_EMAIL}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        phone && `Téléphone: ${phone}`,
        `Type de projet: ${projectType || "Non précisé"}`,
        `Type de commerce: ${businessType || "Non précisé"}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (sendError) {
      console.error("[contact] Resend a refusé l'envoi", sendError);
      return NextResponse.json(
        { error: "Impossible d'envoyer votre demande pour le moment. Réessayez plus tard." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[contact] Échec de l'envoi de l'email", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer votre demande pour le moment. Réessayez plus tard." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

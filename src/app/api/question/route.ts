import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const businessName = typeof body.businessName === "string" ? body.businessName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const question = typeof body.question === "string" ? body.question.trim() : "";
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
  if (!question || question.length < 5 || question.length > 4000) {
    return NextResponse.json(
      { error: "La question doit contenir au moins 5 caractères." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY_QUESTION) {
    console.error("[question] RESEND_API_KEY_QUESTION est manquante — configure-la dans .env.local");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas encore configuré. Contactez-nous par email." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY_QUESTION);
    const { error: sendError } = await resend.emails.send({
      from: `DualLane Digital <${FROM_EMAIL}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `Nouvelle question — ${name}`,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        businessName && `Entreprise: ${businessName}`,
        "",
        "Question:",
        question,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (sendError) {
      console.error("[question] Resend a refusé l'envoi", sendError);
      return NextResponse.json(
        { error: "Impossible d'envoyer votre question pour le moment. Réessayez plus tard." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[question] Échec de l'envoi de l'email", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer votre question pour le moment. Réessayez plus tard." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

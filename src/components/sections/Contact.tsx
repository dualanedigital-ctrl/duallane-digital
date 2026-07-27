"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-background-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors focus:border-accent focus:outline-none";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();
  const form = t.contact.form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? form.genericError);
      }

      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : form.genericError);
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <GlowBackdrop className="opacity-60" />
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <Reveal>
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:p-8 sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">{t.contact.preferToTalk.title}</p>
                <p className="text-sm text-foreground-muted">{t.contact.preferToTalk.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:items-end">
              <div className="flex flex-col items-center gap-1.5 sm:items-end">
                {siteConfig.phones.map((phone, index) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-accent"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    {phone.display}
                    <span className="text-xs font-normal text-foreground-subtle">
                      {t.contact.preferToTalk.phoneLabels[index]}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-xs text-foreground-subtle sm:text-right">
                <span className="font-medium text-foreground-muted">
                  {t.contact.preferToTalk.availableLabel}
                </span>{" "}
                {t.contact.preferToTalk.days} · {t.contact.preferToTalk.hours}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-surface p-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.contact.emailLabel}</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-foreground-muted transition-colors hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.contact.responseLabel}</p>
                    <p className="text-sm text-foreground-muted">{t.contact.responseValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.contact.zoneLabel}</p>
                    <p className="text-sm text-foreground-muted">{t.contact.zoneValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.contact.connectLabel}</p>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground-muted transition-colors hover:text-accent"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-foreground-subtle">
                      {t.contact.connectDescription}
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="rounded-xl border border-border-strong bg-background-elevated p-5 text-sm leading-relaxed text-foreground-muted italic">
                {t.contact.quote}
                <footer className="mt-2 text-foreground-subtle not-italic">
                  {t.contact.quoteAuthor}
                </footer>
              </blockquote>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-8">
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {form.nameLabel}
                  </label>
                  <input id="name" name="name" required maxLength={120} className={inputClasses} placeholder={form.namePlaceholder} />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {form.emailLabel}
                  </label>
                  <input id="email" type="email" name="email" required maxLength={200} className={inputClasses} placeholder={form.emailPlaceholder} />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {form.phoneLabel} <span className="text-foreground-subtle">{form.phoneOptional}</span>
                  </label>
                  <input id="phone" type="tel" name="phone" maxLength={30} className={inputClasses} placeholder={form.phonePlaceholder} />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="projectType" className="text-sm font-medium text-foreground">
                    {form.projectTypeLabel}
                  </label>
                  <select id="projectType" name="projectType" defaultValue={form.projectTypes[0]} className={cn(inputClasses, "cursor-pointer")}>
                    {form.projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-background-elevated">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="businessType" className="text-sm font-medium text-foreground">
                    {form.businessTypeLabel}
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    defaultValue={form.businessTypes[0]}
                    className={cn(inputClasses, "cursor-pointer")}
                  >
                    {form.businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-background-elevated">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={4000}
                    rows={5}
                    className={cn(inputClasses, "resize-none")}
                    placeholder={form.messagePlaceholder}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" disabled={status === "loading"} className="mt-6 w-full">
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {form.submitting}
                  </>
                ) : (
                  <>
                    {form.submit}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
                  role="status"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {form.successMessage}
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  role="alert"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

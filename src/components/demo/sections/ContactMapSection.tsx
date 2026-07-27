"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { demoUiStrings } from "@/lib/demo-i18n/uiStrings";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-background-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors focus:border-accent focus:outline-none";

export function ContactMapSection({
  id = "contact",
  eyebrow,
  title,
  description,
  address,
  phone,
  email,
  hoursNote,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  hoursNote?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { locale } = useDemoLanguage();
  const ui = demoUiStrings[locale];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formEl = event.currentTarget;
    window.setTimeout(() => {
      setStatus("success");
      formEl.reset();
    }, 700);
  }

  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="flex h-full flex-col gap-6">
              <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{ui.address}</p>
                    <p className="text-sm text-foreground-muted">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{ui.phone}</p>
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="text-sm text-foreground-muted transition-colors hover:text-accent">
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{ui.email}</p>
                    <a href={`mailto:${email}`} className="text-sm text-foreground-muted transition-colors hover:text-accent">
                      {email}
                    </a>
                  </div>
                </div>
                {hoursNote && <p className="text-xs text-foreground-subtle">{hoursNote}</p>}
              </div>
              <div className="h-64 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Location map"
                  src={mapSrc}
                  className="h-full w-full grayscale invert-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${id}-name`} className="text-sm font-medium text-foreground">
                    {ui.fullName}
                  </label>
                  <input id={`${id}-name`} name="name" required className={inputClasses} placeholder={ui.fullNamePlaceholder} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${id}-email`} className="text-sm font-medium text-foreground">
                    {ui.email}
                  </label>
                  <input id={`${id}-email`} type="email" name="email" required className={inputClasses} placeholder={ui.emailPlaceholder} />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor={`${id}-message`} className="text-sm font-medium text-foreground">
                    {ui.message}
                  </label>
                  <textarea
                    id={`${id}-message`}
                    name="message"
                    required
                    rows={5}
                    className={cn(inputClasses, "resize-none")}
                    placeholder={ui.messagePlaceholder}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" disabled={status === "loading"} className="mt-6 w-full">
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {ui.sending}
                  </>
                ) : (
                  <>
                    {ui.sendMessage}
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
                  {ui.contactSuccess}
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

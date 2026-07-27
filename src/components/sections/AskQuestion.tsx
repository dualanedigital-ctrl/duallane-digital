"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDollarSign,
  Loader2,
  MessageCircle,
  Rocket,
  Send,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const icons: Record<string, LucideIcon> = {
  MessageCircle,
  CircleDollarSign,
  Rocket,
};

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-background-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors focus:border-accent focus:outline-none";

type Status = "idle" | "loading" | "success" | "error";

export function AskQuestion() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();
  const form = t.askQuestion.form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    try {
      const res = await fetch("/api/question", {
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
    <section id="question" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.askQuestion.eyebrow}
          title={t.askQuestion.title}
          description={t.askQuestion.description}
        />

        <div className="mx-auto grid w-full max-w-4xl gap-5 sm:grid-cols-3">
          {t.askQuestion.topics.map((topic, index) => {
            const Icon = icons[topic.icon];
            return (
              <Reveal key={topic.label} delay={index * 0.08}>
                <div className="group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:border-border-strong hover:bg-surface-hover">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="relative text-sm font-medium text-foreground">{topic.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-surface p-8"
          >
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="askq-name" className="text-sm font-medium text-foreground">
                    {form.nameLabel}
                  </label>
                  <input
                    id="askq-name"
                    name="name"
                    required
                    maxLength={120}
                    className={inputClasses}
                    placeholder={form.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="askq-business" className="text-sm font-medium text-foreground">
                    {form.businessNameLabel} <span className="text-foreground-subtle">{form.businessNameOptional}</span>
                  </label>
                  <input
                    id="askq-business"
                    name="businessName"
                    maxLength={120}
                    className={inputClasses}
                    placeholder={form.businessNamePlaceholder}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="askq-email" className="text-sm font-medium text-foreground">
                  {form.emailLabel}
                </label>
                <input
                  id="askq-email"
                  type="email"
                  name="email"
                  required
                  maxLength={200}
                  className={inputClasses}
                  placeholder={form.emailPlaceholder}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="askq-question" className="text-sm font-medium text-foreground">
                  {form.questionLabel}
                </label>
                <textarea
                  id="askq-question"
                  name="question"
                  required
                  minLength={5}
                  maxLength={4000}
                  rows={6}
                  className={cn(inputClasses, "resize-none")}
                  placeholder={form.questionPlaceholder}
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
      </Container>
    </section>
  );
}

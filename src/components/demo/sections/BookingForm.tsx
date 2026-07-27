"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { demoUiStrings } from "@/lib/demo-i18n/uiStrings";
import { cn } from "@/lib/utils";

export type BookingField =
  | { type: "text" | "email" | "tel" | "date" | "time"; name: string; label: string; placeholder?: string; required?: boolean; span?: 1 | 2 }
  | { type: "select"; name: string; label: string; options: string[]; required?: boolean; span?: 1 | 2 }
  | { type: "textarea"; name: string; label: string; placeholder?: string; required?: boolean; span?: 1 | 2 };

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-background-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors focus:border-accent focus:outline-none";

export function BookingForm({
  id,
  eyebrow,
  title,
  description,
  fields,
  submitLabel,
  successMessage,
  sideNote,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  fields: BookingField[];
  submitLabel: string;
  successMessage: string;
  sideNote?: { title: string; body: string };
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { locale } = useDemoLanguage();
  const ui = demoUiStrings[locale];

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
        <div
          className={cn(
            "mx-auto grid w-full gap-10",
            sideNote ? "max-w-5xl lg:grid-cols-[0.8fr_1.2fr]" : "max-w-2xl"
          )}
        >
          {sideNote && (
            <Reveal direction="right">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-lg font-semibold text-foreground">{sideNote.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{sideNote.body}</p>
              </div>
            </Reveal>
          )}
          <Reveal direction={sideNote ? "left" : "up"} delay={sideNote ? 0.1 : 0}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => {
                  const spanClass = (field.span ?? 1) === 2 ? "sm:col-span-2" : "sm:col-span-1";
                  return (
                    <div key={field.name} className={cn("flex flex-col gap-2", spanClass)}>
                      <label htmlFor={field.name} className="text-sm font-medium text-foreground">
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          defaultValue={field.options[0]}
                          className={cn(inputClasses, "cursor-pointer")}
                        >
                          {field.options.map((opt) => (
                            <option key={opt} value={opt} className="bg-background-elevated">
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          rows={5}
                          placeholder={field.placeholder}
                          className={cn(inputClasses, "resize-none")}
                        />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          className={inputClasses}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <Button type="submit" size="lg" disabled={status === "loading"} className="mt-6 w-full">
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {ui.sending}
                  </>
                ) : (
                  <>
                    {submitLabel}
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
                  {successMessage}
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

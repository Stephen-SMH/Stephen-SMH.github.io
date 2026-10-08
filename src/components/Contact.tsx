"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { ArrowIsland, Bezel, MonoLabel, Section, SectionHead } from "./ui";

// The number is assembled at click time so it never appears in the page HTML.
const PHONE = [48, 57, 51, 45, 55, 49, 53, 45, 53, 56, 51, 55];
const decodePhone = () => String.fromCharCode(...PHONE);

const field =
  "w-full rounded-2xl bg-paper-sunken/60 px-4 py-3.5 text-[15px] text-ink ring-1 ring-inset ring-rule placeholder:text-ink-faint transition-shadow duration-500 outline-none focus:ring-2 focus:ring-accent";

export function Contact({
  contact,
}: {
  contact: Dict["contact"];
}) {
  const { form, direct, card } = contact;
  const [status, setStatus] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const subject = get("subject");
    const message = get("message");

    if (!name || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ kind: "error", text: form.invalid });
      return;
    }
    // No backend: hand the message to the visitor's own mail client.
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${direct.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: "ok", text: form.opening });
  };

  const rowBase =
    "group flex items-center justify-between gap-4 rounded-2xl bg-paper-sunken/50 px-5 py-4 ring-1 ring-inset ring-rule transition-all duration-500 hover:bg-paper-sunken hover:ring-accent/40";
  const rowLabel = "text-[13px] text-ink-faint";
  const rowValue = "font-mono text-[13px] text-ink transition group-hover:text-accent";

  return (
    <Section id="contact">
      <SectionHead eyebrow={contact.eyebrow} title={contact.title} />

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Bezel coreClassName="p-7 sm:p-10">
            <form noValidate onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-ink-soft">
                    {form.name}
                  </label>
                  <input id="name" name="name" required autoComplete="name" placeholder={form.namePh} className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-ink-soft">
                    {form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={form.emailPh}
                    className={field}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-[13px] font-medium text-ink-soft">
                  {form.subject}
                </label>
                <input id="subject" name="subject" required placeholder={form.subjectPh} className={field} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-ink-soft">
                  {form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={form.messagePh}
                  className={`${field} resize-y`}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button type="submit" className="btn btn-primary">
                  {form.send}
                  <ArrowIsland />
                </button>
                <p aria-live="polite" className="font-mono text-[12px]">
                  {status?.kind === "error" && (
                    <span className="inline-block rounded-lg bg-destructive-soft px-3 py-1.5 text-destructive-soft-ink">
                      {status.text}
                    </span>
                  )}
                  {status?.kind === "ok" && <span className="text-ink-soft">{status.text}</span>}
                </p>
              </div>
            </form>
          </Bezel>
        </Reveal>

        <Reveal delay={100}>
          <Bezel className="h-full" coreClassName="core-accent p-7 sm:p-10">
            <MonoLabel>{direct.title}</MonoLabel>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${direct.email}`} className={rowBase}>
                  <span className={rowLabel}>{direct.emailLabel}</span>
                  <span className={rowValue}>{direct.email}</span>
                </a>
              </li>
              <li>
                <a href={direct.githubUrl} target="_blank" rel="noreferrer noopener" className={rowBase}>
                  <span className={rowLabel}>{direct.githubLabel}</span>
                  <span className={rowValue}>{direct.github}</span>
                </a>
              </li>
              <li>
                <a href={direct.linkedinUrl} target="_blank" rel="noreferrer noopener" className={rowBase}>
                  <span className={rowLabel}>{direct.linkedinLabel}</span>
                  <span className={rowValue}>{direct.linkedin}</span>
                </a>
              </li>
              <li>
                {phone ? (
                  <a href={`tel:${phone.replace(/-/g, "")}`} className={rowBase}>
                    <span className={rowLabel}>{direct.phoneLabel}</span>
                    <span className={rowValue}>{phone}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    aria-label={direct.revealAria}
                    onClick={() => setPhone(decodePhone())}
                    className={`${rowBase} w-full text-left`}
                  >
                    <span className={rowLabel}>{direct.phoneLabel}</span>
                    <span className="flex items-center gap-2">
                      <span className="select-none font-mono text-[13px] text-ink-soft" aria-hidden="true">
                        {direct.phoneMasked}
                      </span>
                      <span className="font-mono text-[11px] text-accent transition-colors duration-500 group-hover:text-accent-soft-ink">
                        {direct.reveal}
                      </span>
                    </span>
                  </button>
                )}
              </li>
            </ul>
            <p className="mt-3 px-1 font-mono text-[11px] text-ink-faint">{direct.hiddenNote}</p>

            <div className="mt-6 rounded-2xl bg-paper-sunken/50 p-5 ring-1 ring-inset ring-rule">
              <p className="font-mono text-[12px] text-ink-soft">
                <span className="text-accent">$</span> {card.locationCmd}
              </p>
              <p className="mt-1.5 text-[13px] text-ink">{card.location}</p>
              <p className="mt-3 font-mono text-[12px] text-ink-soft">
                <span className="text-accent">$</span> {card.availabilityCmd}
              </p>
              <p className="mt-1.5 text-[13px] text-ink">{card.availability}</p>
            </div>
          </Bezel>
        </Reveal>
      </div>
    </Section>
  );
}

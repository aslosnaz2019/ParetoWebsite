"use client";

import { useMemo, useState } from "react";

type Committee = "asset-management" | "private-equity" | "venture-growth" | "no-preference";

interface FormState {
  fullName: string;
  email: string;
  university: string;
  linkedin: string;
  committee: Committee | "";
  thesis: string;
  cvFileName: string | null;
}

const STEPS = ["Personal info", "Committee", "Thesis", "CV upload", "Review & submit"] as const;

const initialState: FormState = {
  fullName: "",
  email: "",
  university: "",
  linkedin: "",
  committee: "",
  thesis: "",
  cvFileName: null,
};

function wordCount(text: string) {
  return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
}

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const words = useMemo(() => wordCount(form.thesis), [form.thesis]);
  const thesisValid = words >= 300 && words <= 400;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function canAdvance() {
    switch (step) {
      case 0:
        return form.fullName.trim() !== "" && form.email.trim() !== "";
      case 1:
        return form.committee !== "";
      case 2:
        return thesisValid;
      case 3:
        return true; // CV is optional
      default:
        return true;
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        "This form isn't connected to a backend yet — Supabase and Resend need to be configured before real submissions can be saved and confirmed."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-column">
        <p className="font-serif text-[20px] leading-relaxed text-am-text">
          Thesis received. A confirmation email is on its way.
        </p>
        <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/60">
          The founder board reviews applications after September 20.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-column">
      {/* Step indicator */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-am-text/10 pb-6">
        {STEPS.map((label, i) => (
          <span
            key={label}
            className={`font-sans text-[11px] tracking-label uppercase ${
              i === step ? "text-am-accent" : i < step ? "text-am-text/50" : "text-am-text/25"
            }`}
          >
            {`0${i + 1}`} {label}
          </span>
        ))}
      </div>

      <div className="mt-10">
        {step === 0 && (
          <div className="space-y-6">
            <Field label="Full name">
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={inputClass}
                autoComplete="name"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
                autoComplete="email"
              />
            </Field>
            <Field label="University">
              <input
                type="text"
                value={form.university}
                onChange={(e) => update("university", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="LinkedIn URL">
              <input
                type="url"
                value={form.linkedin}
                onChange={(e) => update("linkedin", e.target.value)}
                className={inputClass}
                placeholder="https://linkedin.com/in/..."
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <p className="font-sans text-[12px] tracking-label uppercase text-am-text/50">
              Committee preference
            </p>
            {(
              [
                ["asset-management", "Asset Management"],
                ["private-equity", "Private Equity"],
                ["venture-growth", "Venture & Growth"],
                ["no-preference", "No preference"],
              ] as [Committee, string][]
            ).map(([value, label]) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-3 border border-am-text/15 px-4 py-3 has-[:checked]:border-am-accent"
              >
                <input
                  type="radio"
                  name="committee"
                  value={value}
                  checked={form.committee === value}
                  onChange={() => update("committee", value)}
                  className="accent-am-accent"
                />
                <span className="font-serif text-[16px] text-am-text">{label}</span>
              </label>
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="font-sans text-[12px] tracking-label uppercase text-am-text/50">
              Pick a stock. Write a 300-word thesis. Defend it.
            </p>
            <textarea
              value={form.thesis}
              onChange={(e) => update("thesis", e.target.value)}
              rows={12}
              className={`${inputClass} mt-4 font-serif leading-relaxed`}
            />
            <p
              className={`mt-2 font-sans text-[12px] tracking-label ${
                thesisValid ? "text-am-text/50" : "text-am-accent"
              }`}
            >
              {words} words (300 minimum, 400 maximum)
            </p>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="font-sans text-[12px] tracking-label uppercase text-am-text/50">
              CV upload (optional)
            </p>
            <label className="mt-4 flex cursor-pointer flex-col items-start gap-2 border border-dashed border-am-text/25 px-6 py-8">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) =>
                  update("cvFileName", e.target.files?.[0]?.name ?? null)
                }
              />
              <span className="font-serif text-[15px] text-am-text">
                {form.cvFileName ?? "Choose a file"}
              </span>
              <span className="font-sans text-[11px] tracking-label uppercase text-am-text/40">
                PDF or Word, up to 5MB
              </span>
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <ReviewRow label="Name" value={form.fullName} />
            <ReviewRow label="Email" value={form.email} />
            <ReviewRow label="University" value={form.university || "—"} />
            <ReviewRow label="Committee" value={form.committee || "—"} />
            <ReviewRow label="Thesis" value={`${words} words`} />
            <ReviewRow label="CV" value={form.cvFileName ?? "Not attached"} />
            {error && (
              <p className="font-sans text-[13px] leading-relaxed text-am-accent">
                {error}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-am-text/10 pt-6">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="font-sans text-[12px] tracking-label uppercase text-am-text/50 disabled:opacity-0"
        >
          ← Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            disabled={!canAdvance()}
            onClick={() => setStep((s) => s + 1)}
            className="border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg disabled:cursor-not-allowed disabled:opacity-30"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            disabled={submitting}
            onClick={handleSubmit}
            className="border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg disabled:cursor-not-allowed disabled:opacity-30"
          >
            {submitting ? "Submitting…" : "Submit application"}
          </button>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-am-text/20 bg-transparent px-4 py-3 font-serif text-[16px] text-am-text outline-none focus:border-am-accent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block font-sans text-[12px] tracking-label uppercase text-am-text/50">
        {label}
      </label>
      {children}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-am-text/10 pb-3">
      <span className="font-sans text-[12px] tracking-label uppercase text-am-text/50">
        {label}
      </span>
      <span className="max-w-[60%] text-right font-serif text-[15px] text-am-text">
        {value}
      </span>
    </div>
  );
}

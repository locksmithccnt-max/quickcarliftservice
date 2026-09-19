"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  defaultService?: string;
  compact?: boolean;
};

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
const labelClass = "text-sm font-medium text-foreground";

export default function BookingForm({ defaultService, compact }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      // TODO: Wire up form submission to backend/email service
      // Example:
      // await fetch("/api/booking", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      console.log("[booking-form] submitted", payload);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or contact us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/40 bg-accent-soft p-6 text-sm text-foreground">
        <p className="text-base font-semibold text-accent">
          Thanks — your enquiry has been received.
        </p>
        <p className="mt-1 text-foreground-muted">
          We&apos;ll be in touch shortly to confirm your booking details. For an
          urgent trip, please call or message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="name" className={labelClass}>
          Full name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`${inputClass} mt-1.5`}
          placeholder="Your name"
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-accent">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={`${inputClass} mt-1.5`}
          placeholder="+971 ..."
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="pickup" className={labelClass}>
          Pickup location <span className="text-accent">*</span>
        </label>
        <input
          id="pickup"
          name="pickup"
          type="text"
          required
          className={`${inputClass} mt-1.5`}
          placeholder="e.g. Khalifa City, Abu Dhabi"
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="dropoff" className={labelClass}>
          Drop-off location <span className="text-accent">*</span>
        </label>
        <input
          id="dropoff"
          name="dropoff"
          type="text"
          required
          className={`${inputClass} mt-1.5`}
          placeholder="e.g. Business Bay, Dubai"
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="date" className={labelClass}>
          Date <span className="text-accent">*</span>
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className={`${inputClass} mt-1.5`}
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="time" className={labelClass}>
          Preferred time
        </label>
        <input
          id="time"
          name="time"
          type="time"
          className={`${inputClass} mt-1.5`}
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="serviceType" className={labelClass}>
          Service type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          defaultValue={defaultService ?? ""}
          className={`${inputClass} mt-1.5`}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label htmlFor="passengers" className={labelClass}>
          Number of passengers
        </label>
        <input
          id="passengers"
          name="passengers"
          type="number"
          min={1}
          defaultValue={1}
          className={`${inputClass} mt-1.5`}
        />
      </div>

      <div className={compact ? "" : "sm:col-span-2"}>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} mt-1.5`}
          placeholder="Anything else we should know? Return trip, luggage, stops, etc."
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 sm:col-span-2">{error}</p>
      )}

      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send booking enquiry"}
        </button>
        <p className="mt-3 text-xs text-foreground-subtle">
          By submitting, you agree to be contacted about your enquiry. We do not
          share your details with third parties.
        </p>
      </div>
    </form>
  );
}

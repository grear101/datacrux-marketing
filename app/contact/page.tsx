"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg bg-navy-800 border border-navy-700 px-4 py-2.5 text-ice-50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition";
const labelClass = "block text-sm text-slate-400 mb-1.5";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, businessName, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-md mx-auto px-6 py-28 text-center">
        <h1 className="font-display text-2xl font-semibold mb-3">Thanks, {name.split(" ")[0] || "there"}!</h1>
        <p className="text-slate-400">We've got your message and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-20">
      <h1 className="font-display text-3xl font-semibold text-center mb-3">Let's get AMARA working for you</h1>
      <p className="text-slate-400 text-center mb-10">
        Tell us a bit about your business and we'll be in touch to set you up.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClass} htmlFor="name">Your name</label>
          <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="businessName">Business name</label>
          <input id="businessName" required value={businessName} onChange={(e) => setBusinessName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="message">What are you selling, and what would you like AMARA to help with?</label>
          <textarea id="message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
            Something went wrong - please try again, or reach us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-white font-medium py-2.5 transition"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}

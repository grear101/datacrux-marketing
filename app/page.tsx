import Link from "next/link";
import TryAmaraWidget from "@/components/TryAmaraWidget";

const HIGHLIGHTS = [
  {
    title: "Negotiates, within limits you set",
    body: "AMARA can discuss price with a customer - but every price is checked against your real floor and list price, server-side, every single time. She can never go lower than you've allowed, no matter how she's asked.",
  },
  {
    title: "Remembers your returning customers",
    body: "A customer who's ordered before gets greeted by name, without AMARA ever having to ask or explain how she remembered.",
  },
  {
    title: "Knows when to hand off to a human",
    body: "If a customer wants to talk to a real person, AMARA recognizes that immediately, summarizes the conversation, and routes it straight to your team on WhatsApp.",
  },
  {
    title: "Works on your website and WhatsApp",
    body: "One assistant, embedded anywhere - a chat bubble on your site, or a click-to-chat link from your ads straight into the same conversation.",
  },
];

export default function HomePage() {
  return (
    <div>
      <TryAmaraWidget />

      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 text-center overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />

        <div className="relative z-10">
          <p className="font-display text-xs tracking-[0.25em] text-blue-300 uppercase mb-5">
            Decode. Discover. Dominate.
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
            <span className="shimmer-text">AMARA</span>, your smart sales agent — selling for you 24/7
          </h1>
          <p className="text-slate-400 text-lg mt-6 max-w-xl mx-auto">
            AMARA chats with your customers, negotiates within limits you set, and
            closes the sale - on your website and WhatsApp, around the clock.
          </p>
          <div className="flex items-center justify-center gap-4 mt-9">
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg px-6 py-3 transition"
            >
              Get AMARA for your business
            </Link>
            <a
              href="#try-it"
              className="border border-navy-700 hover:bg-navy-800 text-ice-50 font-medium rounded-lg px-6 py-3 transition"
            >
              Try it live ↓
            </a>
          </div>
        </div>
      </section>

      <section id="try-it" className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="font-display text-2xl font-semibold mb-3">See her in action</h2>
        <p className="text-slate-400">
          This isn't a demo video - it's the real AMARA. Tap the chat bubble in
          the corner and try negotiating a price yourself.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 gap-5">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="rounded-xl border border-navy-700 bg-navy-800 p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="diamond-bullet" />
                <h3 className="font-display font-semibold">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-28 text-center">
        <h2 className="font-display text-2xl font-semibold mb-3">
          Ready to let AMARA start selling for you?
        </h2>
        <p className="text-slate-400 mb-7">
          Tell us a bit about your business and we'll set you up.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg px-6 py-3 transition"
        >
          Get started
        </Link>
      </section>
    </div>
  );
}

import Link from "next/link";

const FEATURES = [
  {
    title: "Real negotiation, with a real floor",
    body: "Your products have a list price and a minimum price. AMARA can discuss a discount with a customer, but every single price is checked against your database in real time - never against what the AI thinks was agreed. She can never sell below your floor, no matter how a customer phrases the request.",
  },
  {
    title: "Returning customers, remembered",
    body: "The moment a returning customer gives their phone number, AMARA recognizes them and greets them by name - without ever revealing that a lookup happened. It just feels like she remembered.",
  },
  {
    title: "Product photos, on request",
    body: "Ask AMARA what something looks like, and she shows the real photo you uploaded - right there in the chat.",
  },
  {
    title: "Services, not just products",
    body: "Selling a service instead of a physical item? AMARA asks for a date and time instead of a delivery address, automatically.",
  },
  {
    title: "Knows when to bring in a human",
    body: "If a customer asks to speak to a real person, AMARA stops selling immediately, summarizes the conversation so far, and routes it to your team on WhatsApp with full context.",
  },
  {
    title: "Orders, confirmed and sent to you",
    body: "Once a customer agrees to buy, AMARA collects their name, phone, and delivery details, confirms the order, and sends you everything you need on WhatsApp to follow up.",
  },
  {
    title: "Your own voice",
    body: "Set AMARA's tone, greeting, and a description of your business - she adapts to sound like you, within safety rules that are always enforced no matter what.",
  },
  {
    title: "Everything priced in Naira",
    body: "Built for Nigerian businesses from day one - every price AMARA ever states is in ₦, always.",
  },
  {
    title: "Analytics that matter",
    body: "Revenue, orders, conversion rate, negotiation approval rate, and handover rate - all in one dashboard, so you always know how your AI sales agent is actually performing.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-center mb-4">
        Everything AMARA does
      </h1>
      <p className="text-slate-400 text-center max-w-xl mx-auto mb-14">
        Every one of these is real, built, and running today - not a roadmap.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-xl border border-navy-700 bg-navy-800 p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="diamond-bullet" />
              <h2 className="font-display font-semibold">{f.title}</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg px-6 py-3 transition"
        >
          Get AMARA for your business
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

// No real numbers here yet, by design - pricing isn't finalized and
// there's no self-service checkout built, so every tier leads to
// "Contact us" rather than a price tag. Once real numbers are decided,
// just replace the `priceLabel` strings below - nothing else needs to
// change.
const PLANS = [
  {
    name: "Standard",
    priceLabel: "Contact us",
    description: "For a single business just getting started with AMARA.",
    features: [
      "Full negotiation engine with your own price floors",
      "Website chat widget + WhatsApp click-to-chat",
      "Returning customer recognition",
      "Order & handover notifications",
      "A monthly conversation allowance, sized to you",
    ],
  },
  {
    name: "Premium",
    priceLabel: "Contact us",
    description: "For a growing business that needs more headroom.",
    highlighted: true,
    features: [
      "Everything in Standard",
      "A larger monthly conversation allowance",
      "Priority support from the Datacrux team",
      "Help tuning AMARA's persona to your brand",
    ],
  },
  {
    name: "Enterprise",
    priceLabel: "Contact us",
    description: "For businesses with real scale or custom needs.",
    features: [
      "Everything in Premium",
      "Unlimited conversations",
      "Custom integrations on request",
      "A dedicated setup conversation with our team",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-center mb-4">
        Simple plans, sized to your business
      </h1>
      <p className="text-slate-400 text-center max-w-xl mx-auto mb-14">
        Every plan includes a one-time setup fee plus a monthly subscription.
        Tell us about your business and we'll recommend the right fit.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border p-6 flex flex-col ${
              plan.highlighted
                ? "border-blue-500/50 bg-blue-500/5"
                : "border-navy-700 bg-navy-800"
            }`}
          >
            <h2 className="font-display text-lg font-semibold">{plan.name}</h2>
            <p className="text-slate-400 text-sm mt-1 mb-4">{plan.description}</p>
            <p className="font-display text-2xl font-semibold mb-5">{plan.priceLabel}</p>

            <ul className="space-y-2.5 flex-1 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="diamond-bullet mt-1.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`text-center rounded-lg px-4 py-2.5 font-medium transition ${
                plan.highlighted
                  ? "bg-blue-500 hover:bg-blue-400 text-white"
                  : "border border-navy-700 hover:bg-navy-900 text-ice-50"
              }`}
            >
              Contact us
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

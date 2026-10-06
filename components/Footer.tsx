import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Datacrux Africa Ltd. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link href="/features" className="text-sm text-slate-400 hover:text-ice-50 transition">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-slate-400 hover:text-ice-50 transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm text-slate-400 hover:text-ice-50 transition">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

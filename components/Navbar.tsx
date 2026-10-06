import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-navy-700 bg-navy-900/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Datacrux Africa" width={32} height={32} className="rounded-full" />
          <span className="font-display font-semibold text-sm tracking-wide">
            AMARA <span className="text-slate-500 font-normal">by Datacrux Africa</span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-7">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-ice-50 transition">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2 transition"
        >
          Get AMARA
        </Link>
      </div>
    </header>
  );
}

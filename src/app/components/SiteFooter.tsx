import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div>
        <p>Eorid — Your private digital world.</p>
      </div>

      <nav aria-label="Footer navigation">
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/ai">AI</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/security">Security</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/download">Download</Link>
      </nav>

      <p>© {new Date().getFullYear()} Eorid. All rights reserved.</p>
    </footer>
  );
}

import Link from "next/link";

import EoridLogo from "./EoridLogo";

export default function SiteHeader() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <EoridLogo />

        <div>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/ai">AI</Link>
          <Link href="/security">Security</Link>
          <Link href="/download">Download</Link>
        </div>
      </nav>
    </header>
  );
}

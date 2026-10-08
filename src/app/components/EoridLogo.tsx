import Link from "next/link";

export default function EoridLogo() {
  return (
    <Link
      href="/"
      className="eorid-logo"
      aria-label="Eorid home"
    >
      <span className="eorid-logo-mark" aria-hidden="true">
        E
      </span>

      <span className="eorid-logo-name">Eorid</span>
    </Link>
  );
}

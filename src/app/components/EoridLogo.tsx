import Link from "next/link";

export default function EoridLogo() {
  return (
    <Link
      href="/"
      className="eorid-logo"
      aria-label="Eorid home"
    >
      <span className="eorid-logo-mark" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 5.5H18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M6 12H15.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M6 18.5H18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M6 5.5V18.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="eorid-logo-name">Eorid</span>
    </Link>
  );
}

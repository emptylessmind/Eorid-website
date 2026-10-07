"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep production error reporting available for a future monitoring service.
    // We intentionally do not expose error details to visitors.
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">EORID</p>

          <h1>Something went wrong.</h1>

          <p className="hero-description">
            Eorid encountered an unexpected problem. You can try again or
            return to the homepage.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() => reset()}
            >
              Try again
            </button>

            <Link className="button button-secondary" href="/">
              Back to Eorid
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

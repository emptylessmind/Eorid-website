"use client";

import Link from "next/link";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <main>
          <section className="hero">
            <div className="hero-content">
              <p className="eyebrow">EORID</p>

              <h1>Something went wrong.</h1>

              <p className="hero-description">
                Eorid could not load this page correctly. Please try
                again or return to the homepage.
              </p>

              <div className="hero-actions">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={() => window.location.reload()}
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
      </body>
    </html>
  );
}

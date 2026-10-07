import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">404</p>

          <h1>Page not found.</h1>

          <p className="hero-description">
            The page you are looking for does not exist or may have been
            moved.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/">
              Back to Eorid
            </Link>

            <Link className="button button-secondary" href="/features">
              Explore Eorid
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const features = [
  {
    title: "Private conversations",
    description:
      "Connect with people through private messaging designed around control and privacy.",
  },
  {
    title: "Personal AI",
    description:
      "Build an AI experience that adapts to your preferences, personality, and workflow.",
  },
  {
    title: "Your files",
    description:
      "Keep your personal images, documents, and other files close to your digital life.",
  },
  {
    title: "Social",
    description:
      "Discover people, connect with friends, and build your own digital community.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">EORID</p>

          <h1>Your private digital world.</h1>

          <p className="hero-description">
            A private social and AI platform designed around you, your
            conversations, your files, and your personal AI.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/download">
              Get Eorid
            </Link>

            <Link className="button button-secondary" href="/features">
              Explore features
            </Link>
          </div>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">ONE PLATFORM</p>

          <h2>Everything that matters to you, together.</h2>

          <p>
            Eorid brings communication, social connections, personal
            files, and AI into one experience built around your control.
          </p>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="ai-section">
        <div>
          <p className="eyebrow">EORID AI</p>

          <h2>An AI that grows with you.</h2>

          <p>
            Your AI experience is designed to remain personal across
            devices and compatible models, with your preferences and
            identity staying under your control.
          </p>

          <Link className="text-link" href="/ai">
            Explore Eorid AI →
          </Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">THE FUTURE IS PERSONAL</p>

        <h2>Build your digital world with Eorid.</h2>

        <Link className="button button-primary" href="/download">
          Get Eorid
        </Link>
      </section>
    </main>
  );
}

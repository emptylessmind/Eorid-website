import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Private by design",
    description:
      "Your conversations, files, and personal space are built around privacy and control.",
  },
  {
    number: "02",
    title: "Personal AI",
    description:
      "An AI experience that learns your preferences and grows with you without losing your identity.",
  },
  {
    number: "03",
    title: "Your digital world",
    description:
      "Messages, people, files, and AI come together in one connected personal experience.",
  },
  {
    number: "04",
    title: "Built around you",
    description:
      "Eorid is designed to adapt to the way you communicate, work, create, and connect.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">EORID / 01</p>

          <h1>
            Your
            <br />
            private
            <br />
            digital world.
          </h1>

          <p className="hero-description">
            A new kind of social and AI platform — designed around your
            identity, your conversations, your files, and the way you live
            digitally.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/download">
              Get Eorid
            </Link>

            <Link className="button button-secondary" href="/features">
              Discover Eorid
            </Link>
          </div>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">THE IDEA / 02</p>

          <h2>One place for the digital parts of your life.</h2>

          <p>
            Eorid brings communication, social connections, personal files,
            and AI together without treating your digital life like a
            collection of separate products.
          </p>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="ai-section">
        <div>
          <p className="eyebrow">EORID AI / 03</p>

          <h2>Your AI should know you.</h2>

          <p>
            Your AI experience is designed to remain personal across
            compatible models and devices. Your preferences, personality,
            and identity stay connected to you.
          </p>

          <Link className="text-link" href="/ai">
            Explore Eorid AI →
          </Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">THE BEGINNING / 04</p>

        <h2>Build a digital world that feels like yours.</h2>

        <Link className="button button-primary" href="/download">
          Get Eorid
        </Link>
      </section>
    </main>
  );
}

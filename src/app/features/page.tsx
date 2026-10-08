id="q3w7px"
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the core features that make Eorid a private, connected digital world.",
};

const features = [
  {
    number: "01",
    title: "Private communication",
    description:
      "Connect with people through private conversations designed around ownership, control, and secure communication.",
  },
  {
    number: "02",
    title: "Personal AI",
    description:
      "Use compatible AI models while keeping your personal identity, preferences, and AI experience connected to you.",
  },
  {
    number: "03",
    title: "Your files",
    description:
      "Keep your personal files close to your conversations and digital life instead of scattering them across disconnected services.",
  },
  {
    number: "04",
    title: "Social connections",
    description:
      "Build your own network of people and relationships inside a platform designed to feel personal rather than public by default.",
  },
  {
    number: "05",
    title: "Multi-device experience",
    description:
      "Move between supported devices while keeping your Eorid identity and personal experience consistent.",
  },
  {
    number: "06",
    title: "Built for privacy",
    description:
      "Privacy is treated as part of the architecture instead of an option added after the product is built.",
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">EORID / FEATURES</p>

          <h1>
            Everything
            <br />
            connected.
          </h1>

          <p>
            Eorid brings the parts of your digital life that matter to you
            into one private, personal environment.
          </p>
        </div>
      </section>

      <section className="feature-list">
        {features.map((feature) => (
          <article className="feature-list-card" key={feature.number}>
            <div className="feature-list-number">
              {feature.number}
            </div>

            <div className="feature-list-content">
              <h2>{feature.title}</h2>

              <p>{feature.description}</p>
            </div>

            <div className="feature-list-mark" aria-hidden="true">
              +
            </div>
          </article>
        ))}
      </section>

      <section className="page-cta">
        <p className="eyebrow">THE IDEA</p>

        <h2>
          A platform should feel like one world, not ten separate apps.
        </h2>

        <Link className="button button-primary" href="/download">
          Get Eorid
        </Link>
      </section>
    </main>
  );
}


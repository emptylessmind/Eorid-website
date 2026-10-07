import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Eorid features including private conversations, personal AI, files, and social connections.",
};

export default function FeaturesPage() {
  return (
    <main>
      <section className="page-section">
        <p>Eorid</p>

        <h1>Everything in one private place.</h1>

        <p>
          Eorid combines private communication, personal files, social
          connections, and AI into a single experience.
        </p>

        <div>
          <h2>Private conversations</h2>
          <p>
            Chat with people you care about with privacy and control at
            the center.
          </p>

          <h2>Personal AI</h2>
          <p>
            Build an AI experience that can learn your preferences and
            adapt to the way you use it.
          </p>

          <h2>Your files</h2>
          <p>
            Keep your personal images, documents, and other files close
            to your conversations and digital life.
          </p>

          <h2>Social</h2>
          <p>
            Connect with people, discover profiles, and build your own
            private digital community.
          </p>
        </div>
      </section>
    </main>
  );
}

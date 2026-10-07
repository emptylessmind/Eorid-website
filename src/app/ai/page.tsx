import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eorid AI",
  description:
    "Discover Eorid AI, a personal AI experience designed around your preferences, privacy, identity, and compatible local models.",
};

export default function AIPage() {
  return (
    <main>
      <section className="page-section">
        <p>Eorid AI</p>

        <h1>Your AI. Your way.</h1>

        <p>
          Eorid is designed to let your personal AI grow with you while
          keeping your data and preferences under your control.
        </p>

        <div>
          <h2>Personal</h2>
          <p>
            Your AI can adapt to your preferences, personality, and
            everyday workflow.
          </p>

          <h2>Private</h2>
          <p>
            Your personal AI experience is designed around local-first
            data and user-controlled privacy.
          </p>

          <h2>Flexible</h2>
          <p>
            Use compatible AI models on your devices and keep your
            personalization independent from any single model.
          </p>

          <h2>Portable</h2>
          <p>
            Your Eorid AI identity is designed to stay with your account
            when you change devices or models.
          </p>
        </div>
      </section>
    </main>
  );
}

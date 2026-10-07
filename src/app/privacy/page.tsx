import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Learn how Eorid approaches privacy, local-first data, personal AI, and user control.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-section">
        <p>Eorid Privacy</p>

        <h1>Your privacy matters.</h1>

        <p>
          Eorid is being designed with privacy as a core part of the
          product rather than as an afterthought.
        </p>

        <div>
          <h2>Data control</h2>
          <p>
            We aim to give you clear control over your account, personal
            information, conversations, files, and AI personalization.
          </p>

          <h2>Local-first data</h2>
          <p>
            The Eorid application is designed to keep private chats and
            files on your devices whenever possible.
          </p>

          <h2>AI privacy</h2>
          <p>
            Personal AI data is designed around local processing and
            user-controlled synchronization rather than requiring
            private conversations to be sent to a central AI service.
          </p>

          <h2>Your choices</h2>
          <p>
            You will have controls for managing your account, chats,
            personalization, stored data, and privacy settings.
          </p>
        </div>
      </section>
    </main>
  );
}

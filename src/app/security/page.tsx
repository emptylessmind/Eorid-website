import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Learn how Eorid approaches account security, private communication, local-first data, and AI permissions.",
};

export default function SecurityPage() {
  return (
    <main>
      <section>
        <p>Eorid Security</p>

        <h1>Security by design.</h1>

        <p>
          Eorid is being built with security and privacy considered at
          every layer of the platform.
        </p>

        <h2>Account security</h2>
        <p>
          Authentication and account controls are designed to protect
          access to your Eorid account.
        </p>

        <h2>Private communication</h2>
        <p>
          Private messaging is designed around strong encryption and
          user-controlled access to conversations and files.
        </p>

        <h2>Local-first architecture</h2>
        <p>
          Keeping sensitive application data on your devices can reduce
          unnecessary exposure of private information.
        </p>

        <h2>AI permissions</h2>
        <p>
          Eorid AI is designed with explicit permission controls so that
          an AI model cannot grant itself access to protected actions or
          resources.
        </p>

        <h2>Continuous improvement</h2>
        <p>
          Security practices will continue to evolve as Eorid grows and
          new threats and technologies emerge.
        </p>
      </section>
    </main>
  );
}

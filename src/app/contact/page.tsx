import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Eorid team with questions, feedback, privacy concerns, or security issues.",
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <p>Eorid</p>

        <h1>Contact us.</h1>

        <p>
          Have a question, suggestion, or issue with Eorid? We would
          like to hear from you.
        </p>

        <h2>General questions</h2>
        <p>
          For general questions about Eorid, its features, or the
          platform, please contact the Eorid team.
        </p>

        <h2>Privacy and security</h2>
        <p>
          For privacy or security-related questions, please contact us
          with as much relevant information as possible.
        </p>

        <h2>Feedback</h2>
        <p>
          Feedback helps us improve Eorid. Tell us what works, what
          does not, and what you would like to see next.
        </p>
      </section>
    </main>
  );
}

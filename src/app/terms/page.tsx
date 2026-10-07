import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Eorid Terms of Service covering account use, acceptable use, user content, and the Eorid service.",
};

export default function TermsPage() {
  return (
    <main>
      <section>
        <p>Eorid Terms</p>

        <h1>Terms of Service</h1>

        <p>
          These terms describe the basic rules for using Eorid and help
          establish a safe and reliable environment for everyone.
        </p>

        <h2>Using Eorid</h2>
        <p>
          You are responsible for maintaining the security of your
          account and for activity performed through it.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Eorid must not be used for unlawful activity, abuse, fraud,
          harassment, or activity that harms other users or the service.
        </p>

        <h2>Your content</h2>
        <p>
          You retain control over content you create and share through
          Eorid, subject to the permissions and features you choose to
          use.
        </p>

        <h2>Service changes</h2>
        <p>
          Eorid may evolve over time as features, security measures,
          and supported platforms improve.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about these terms, please contact the
          Eorid team.
        </p>
      </section>
    </main>
  );
}

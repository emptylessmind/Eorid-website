import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Find Eorid for Windows, macOS, iPhone, iPad, and Android as the platform becomes available.",
};

export default function DownloadPage() {
  return (
    <main>
      <section className="page-section">
        <p>Eorid</p>

        <h1>Get Eorid.</h1>

        <p>
          Eorid is being built for the devices you use every day, with
          privacy and a consistent personal experience at its core.
        </p>

        <div>
          <h2>Windows</h2>
          <p>Coming soon to the Microsoft Store.</p>

          <h2>macOS</h2>
          <p>Coming soon.</p>

          <h2>iPhone and iPad</h2>
          <p>Coming soon to the App Store.</p>

          <h2>Android</h2>
          <p>Coming soon to Google Play.</p>
        </div>
      </section>
    </main>
  );
}

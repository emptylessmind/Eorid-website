import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Eorid and our vision for a private digital world built around people, communication, files, and personal AI.",
};

export default function AboutPage() {
  return (
    <main>
      <section>
        <p>Eorid</p>

        <h1>Built around you.</h1>

        <p>
          Eorid is designed to bring your social world, conversations,
          files, and personal AI together in one private environment.
        </p>

        <p>
          Our goal is to give people more control over their digital
          lives while making technology feel personal, useful, and
          connected.
        </p>
      </section>
    </main>
  );
}

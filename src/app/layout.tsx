import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firas Bouraoui — Software Engineer",
  description: "Full-stack software engineering student specializing in React, Next.js, Spring Boot, and AI-driven applications.",
  openGraph: {
    title: "Firas Bouraoui — Software Engineer",
    description: "Full-stack software engineering student from Tunis, Tunisia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

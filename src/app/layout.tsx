import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Firas Bouraoui — Software Engineer",
  description: "Full-stack software engineering student specializing in React, Next.js, Spring Boot, and AI-driven applications.",
  openGraph: {
    title: "Firas Bouraoui — Software Engineer",
    description: "Full-stack software engineering student from Tunis, Tunisia.",
    type: "website",
  },
};

// Runs before React hydrates so a saved "light" preference applies
// on first paint instead of flashing the default dark theme.
const noFlashScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
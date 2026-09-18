import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Quadra — Design, Code & AI",
    template: "%s — Quadra",
  },

  description:
    "A multidisciplinary studio building brands, digital products, websites, applications, and AI systems.",

  keywords: [
    "digital studio",
    "web development",
    "UI UX design",
    "AI automation",
    "app development",
    "brand design",
  ],

  openGraph: {
    title: "Quadra — Design, Code & AI",
    description:
      "Design, code, and AI for teams that need products shipped.",
    type: "website",
  },
};

// Runs before React hydrates so the page never flashes the wrong theme
// on load or on refresh.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("quadra-theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable}`} >{children}</body>
    </html>
  );
}
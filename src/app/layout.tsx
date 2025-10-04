import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-poppins",
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-roboto-condensed",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Andrew Finsand | Software Developer Portfolio",
  description: "Andrew Finsand's Full-Stack Developer and UI/UX Designer portfolio. Specializing in Next.js, React, Python, and AI integration. Building scalable web applications, e-commerce platforms, and creative digital solutions.",
  keywords: "Andrew Finsand, UI/UX Designer, Full-Stack Developer, Next.js, React, Python, JavaScript, AI integration, OpenAI API, Supabase, Docker, CI/CD, Tailwind CSS, MongoDB, Flask, DevOps, e-commerce development, web development, portfolio",
  authors: [{ name: "Andrew Finsand" }],
  verification: {
    google: "NaDSZfAj1DbjfdG6_tgPr7XvX2ar9z36JMEQPvjkcds",
  },
  alternates: {
    canonical: "https://www.andrewfinsand.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Preload hero images responsively */}
      {/* Background: Desktop */}
      <link
        rel="preload"
        fetchPriority="high"
        href="/background-hero.webp"
        as="image"
        media="(min-width: 556px)"
        type="image/webp"
      />
      {/* Background: Mobile */}
      <link
        rel="preload"
        fetchPriority="high"
        href="/background-hero-mobile.webp"
        as="image"
        media="(max-width: 555px)"
        type="image/webp"
      />
      {/* Foreground: Desktop */}
      <link
        rel="preload"
        fetchPriority="high"
        href="/foreground-hero.webp"
        as="image"
        media="(min-width: 556px)"
        type="image/webp"
      />
      {/* Foreground: Mobile */}
      <link
        rel="preload"
        fetchPriority="high"
        href="/foreground-hero-mobile.webp"
        as="image"
        media="(max-width: 555px)"
        type="image/webp"
      />
      <body
        className={`${poppins.variable} ${robotoCondensed.variable} antialiased`}
      >
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}

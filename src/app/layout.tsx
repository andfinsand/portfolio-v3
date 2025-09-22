import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Andrew Finsand | Software Developer Portfolio",
  description: "Andrew Finsand's Full-Stack Developer and UI/UX Designer portfolio. Specializing in Next.js, React, Python, and AI integration. Building scalable web applications, e-commerce platforms, and creative digital experiences.",
  keywords: "Andrew Finsand, UI/UX Designer, Full-Stack Developer, Next.js, React, Python, JavaScript, AI integration, OpenAI API, Supabase, Docker, CI/CD, Tailwind CSS, MongoDB, Flask, DevOps, e-commerce development, web development, portfolio",
  authors: [{ name: "Andrew Finsand" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload background images */}
        <link rel="preload" fetchPriority="high" href="/background-hero.webp" as="image" />
        {/* <link rel="preload" href="/foreground.webp" as="image" /> */}
      </head>
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

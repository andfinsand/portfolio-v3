import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Andrew Finsand | Software Developer Portfolio",
  description: "Andrew Finsand's Full-Stack Developer and UI/UX Designer portfolio. Specializing in Next.js, React, Python, and AI integration. Building scalable web applications, e-commerce platforms, and creative digital experiences.",
  keywords: "Andrew Finsand, UI/UX Designer, Full-Stack Developer, Next.js, React, Python, JavaScript, AI integration, OpenAI API, Supabase, Docker, CI/CD, Tailwind CSS, MongoDB, Flask, DevOps, e-commerce development, web development, portfolio",
  authors: [{ name: "Andrew Finsand" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aldino Said | Full Stack Developer Portfolio",
  description: "Experienced Full Stack Developer with over 6 years of expertise in building enterprise web applications, AI pipelines, and payment solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-[#0b0f19] text-slate-100 selection:bg-sky-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}

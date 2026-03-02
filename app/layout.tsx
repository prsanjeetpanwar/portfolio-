import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prsanjeet Panwar — Software Engineer",
  description:
    "Full-stack software engineer specialising in Next.js, TypeScript, PostgreSQL and AI-powered applications.",
  openGraph: {
    title: "Prsanjeet Panwar — Software Engineer",
    description: "Full-stack engineer. Building scalable, impactful products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Josefin+Sans:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

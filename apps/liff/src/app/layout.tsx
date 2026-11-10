import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrandHealth Staff",
  description: "GrandHealth Staff Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
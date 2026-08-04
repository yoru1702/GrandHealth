import "./globals.css";

export const metadata = {
  title: "GrandHealth Staff",
  description: "GrandHealth Staff System",
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
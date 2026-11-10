import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrandHealth",
  description: "ระบบดูแลส่งเสริมสุขภาพผู้สูงอายุ GrandHealth",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
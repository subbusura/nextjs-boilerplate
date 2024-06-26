import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Setup",
  description: "Setup Applicaction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={"h-full" + inter.className}>
      {children}
      </body>
    </html>
  );
}

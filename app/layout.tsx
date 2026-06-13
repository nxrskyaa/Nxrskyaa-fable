import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "NXRSkyaa Labs — Know exactly where your money goes",
  description:
    "NXRSkyaa Labs connects your accounts, watches for problems, and tells you what to do next. From raw data to clear decisions in seconds.",
  metadataBase: new URL("https://app.nxrskyaa.ai"),
  openGraph: {
    title: "NXRSkyaa Labs — Know exactly where your money goes",
    description:
      "From raw data to clear decisions in seconds. Your entire financial stack, connected in minutes.",
    type: "website",
  },
  icons: {
    icon: "/nxr-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-paper text-ink antialiased font-sans">{children}</body>
    </html>
  );
}

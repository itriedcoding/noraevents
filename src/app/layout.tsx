import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@/components/UserProvider";

export const metadata: Metadata = {
  title: "Nora Events",
  description: "The best events in the world, coming soon to your city possibly.",
  openGraph: {
    title: "Nora Events",
    description: "The best events in the world, coming soon to your city possibly.",
    images: [
      {
        url: "/images/og-image.png",
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

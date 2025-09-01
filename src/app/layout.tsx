import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Portrait AI",
  description: "Generate a family portrait with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <footer className="py-4 text-center text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
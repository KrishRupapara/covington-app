import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import Loading from "./loading";
import Nav from "@/components/Nav";
import { cn } from "@/lib/utils";

const mountExtended = localFont({
  src: "../../public/fonts/PPMonumentExtended-Regular.otf",
});

export const metadata: Metadata = {
  title: "Covington - Best construction company in the world",
  description:
    "Covington is the construction company. We build everything from houses to skyscrapers. We are the best in the world. Join us now",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full antialiased", mountExtended.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Nav />
          <Suspense fallback={<Loading />}>
            <div className="flex-grow flex-1">{children}</div>
          </Suspense>
        </main>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import Loading from "./loading";
import Nav from "@/components/Nav";

const mountExtended = localFont({
  src: "../../public/fonts/PPMonumentExtended-Regular.otf",
});

export const metadata: Metadata = {
  title: "Covington - Best construction company in the world",
  description:
    "Covington is the construction company. We build everything from houses to skyscrapers. We are the best in the world. Join us now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mountExtended.className}>
        <Nav />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

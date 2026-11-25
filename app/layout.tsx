import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhysioNearMe — Find physiotherapy care near you",
  description: "Explore physiotherapy options near your location. Find care for orthopaedic recovery, sports injuries, mobility and more.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

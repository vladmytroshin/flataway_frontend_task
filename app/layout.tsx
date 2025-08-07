import type { Metadata } from "next";
import { geistMono, geistSans, pacifico } from "@/lib/fonts";

import "@/lib/styles/globals.css";

export const metadata: Metadata = {
  title: "Flataway Frontend",
  description: "Flataway Frontend: Customizable Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidface",
  description: "By Angel Chavez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ClerkProvider
        appearance={{
          variables: {
            colorText: "#fff",
            colorPrimary: "#fff",
            colorNeutral: "#FFF",
            colorTextSecondary: "#FFF",
            colorBackground: "#151515",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidface",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
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
            colorNeutral: "#000",
            colorTextSecondary: "#FFF",
            colorBackground: "#151515",
            colorInputText: "#000",
            colorInputBackground: "#000"
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}

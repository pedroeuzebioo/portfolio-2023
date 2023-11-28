import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface CustomMetadata extends Metadata {
  author: string;
}

export const metadata: CustomMetadata = {
  title: "Pedro Henrique | Desenvolvedor Web",
  description:
    "Sou Pedro Henrique, um entusiasta desenvolvedor web. Explore meu portfólio para ver um pouco sobre mim, minhas tecnologias, meus projetos e habilidades.",
  author: "Pedro Henrique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

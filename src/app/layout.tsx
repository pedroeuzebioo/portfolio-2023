import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface CustomMetadata extends Metadata {
  author: string;
}

export const metadata: CustomMetadata = {
  title: "Pedro Euzebio | Desenvolvedor Fullstack",
  description:
    "Sou Pedro Euzebio, um desenvolvedor fullstack. Explore meu portfólio para ver um pouco sobre mim, minhas tecnologias, meus projetos em destaques e entrar em contato.",
  author: "Pedro Euzebio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
          {children}
      </body>
    </html>
  );
}

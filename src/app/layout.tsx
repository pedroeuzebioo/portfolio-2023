import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-medium">Olá, eu sou o</h1>
      <span className="text-2xl font-semibold text-indigo-500">
        Pedro Euzebio
      </span>
      <p className="font-medium text-muted-foreground">
        Seja bem-vindo ao meu portfólio
      </p>
      <ContactLinks />
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
      <a
        href="/curriculo.pdf"
        download
        className="flex w-full max-w-[18.75rem] items-center justify-center rounded-full bg-indigo-500 p-2 font-medium"
      >
        Download CV
      </a>
      <Link
        href="mailto:eupedrohenrique.euzebio@gmail.com"
        className="flex w-full max-w-[18.75rem] items-center justify-center rounded-full border-2 border-indigo-500 bg-background px-1 py-2 font-medium transition-all hover:bg-indigo-500"
      >
        Entrar em contato
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <main className="m-auto w-full max-w-7xl flex-1 p-[1.875rem]">
      <section className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <Introduction />
        <Image
          src="/avatar.png"
          alt="Foto do Pedro Henrique"
          width={200}
          height={200}
        />
      </section>
    </main>
  );
}

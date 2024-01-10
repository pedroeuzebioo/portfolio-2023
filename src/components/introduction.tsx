import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className="appear flex min-h-[90vh] flex-col items-center justify-start gap-4 md:flex-row md:items-start md:justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-medium">Olá, eu sou o</h1>
        <span className="text-2xl font-semibold text-indigo-500">
          Pedro Euzebio
        </span>
        <p className="font-medium text-muted-foreground">
          Seja bem-vindo ao meu portfólio
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
          <a
            href="/curriculo.pdf"
            download
            className="flex w-full max-w-[18.75rem] items-center justify-center rounded-full bg-indigo-500 p-2 font-medium"
          >
            Download CV
          </a>
          <Link
            href="mailto:pedroeuzebio.contato@gmail.com"
            className="flex w-full max-w-[18.75rem] items-center justify-center rounded-full border-2 border-indigo-500 bg-background p-2 font-medium transition-all hover:bg-indigo-500"
          >
            Entrar em contato
          </Link>
        </div>
      </div>

      <Image
        src="/avatar.png"
        alt="Foto do Pedro Euzebio"
        width={250}
        height={250}
      />
    </section>
  );
};

export default Introduction;

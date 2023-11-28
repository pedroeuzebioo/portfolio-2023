import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">
      <section className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="font-sans text-3xl font-medium md:text-4xl">
            Olá, eu sou o
          </h1>
          <span className="font-sans text-3xl font-semibold text-indigo-500 md:text-4xl">
            Pedro Henrique
          </span>
          <p className="font-sans text-lg font-medium text-muted-foreground md:text-xl">
            Seja bem-vindo ao meu portfólio
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
            <a
              className="flex w-full max-w-xs items-center justify-center rounded-full bg-indigo-500 px-4 py-2 font-medium transition-all hover:bg-indigo-500/50 md:px-8"
              href="/curriculo.pdf"
              download
            >
              Download CV
            </a>
            <a
              href="mailto:eupedrohenrique.euzebio@gmail.com"
              className="flex w-full max-w-xs items-center justify-center rounded-full border-2 border-indigo-500 bg-background px-4 py-2 font-medium transition-all hover:bg-indigo-500 md:px-8"
            >
              Entrar em contato
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/avatar.png"
            alt="Foto do Pedro Henrique"
            width={200}
            height={200}
          />
        </div>
      </section>
    </main>
  );
}

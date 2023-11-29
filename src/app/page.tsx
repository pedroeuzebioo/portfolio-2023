import Image from "next/image";

const downloadCVLink = "./curriculo.pdf";
const emailContactLink = "mailto:eupedrohenrique.euzebio@gmail.com";

function IntroductionSection() {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-medium md:text-4xl">Olá, eu sou o</h1>
      <span className="text-3xl font-semibold text-indigo-500 md:text-4xl">
        Pedro Henrique
      </span>
      <p className="font-sans text-lg font-medium text-muted-foreground md:text-xl">
        Seja bem-vindo ao meu portfólio
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
        <a
          className="flex w-full max-w-xs items-center justify-center rounded-full bg-indigo-500 px-4 py-2 font-medium transition-all hover:bg-indigo-500/50 md:px-8"
          href={downloadCVLink}
          download
        >
          Download CV
        </a>
        <a
          href={emailContactLink}
          className="flex w-full max-w-xs items-center justify-center rounded-full border-2 border-indigo-500 bg-background px-4 py-2 font-medium transition-all hover:bg-indigo-500 md:px-8"
        >
          Entrar em contato
        </a>
      </div>
    </div>
  );
}

function AboutMeSection() {
  return (
    <div>
      <h2 className="mb-4 text-center text-3xl font-medium md:text-4xl">
        Sobre mim
      </h2>

      <div className="flex flex-col gap-3 md:flex-row">
        <Image
          src="/pedro.jpg"
          alt="Foto do Pedro Henrique"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full grayscale md:max-h-[350px]"
        />

        <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
          Sou um entusiasta do desenvolvimento web. Minha primeira experiência
          profissional foi como Desenvolvedor Web no IFCE Campus Baturité, onde
          comecei a explorar o mundo da programação. Atualmente, atuo como
          Técnico de TI no FMAS de Baturité, onde estou envolvido em várias
          atividades relacionadas à tecnologia. <br></br>
          Além do meu trabalho, tenho uma paixão por ensinar e ajudar os outros.
          Tenho o objetivo de me tornar um educador na área da programação,
          compartilhando meu conhecimento e ajudando outros a adquirir
          habilidades valiosas e seu potencial máximo. Estou sempre aberto a
          novos desafios e oportunidades de aprendizado, e estou animado para
          continuar minha jornada, com um foco em contribuir para a comunidade
          de tecnologia e fazer a diferença na vida das pessoas.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-10">
      <section className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <IntroductionSection />
        <div>
          <Image
            src="/avatar.png"
            alt="Foto do Pedro Henrique"
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className="mt-10">
        <AboutMeSection />
      </section>
    </main>
  );
}

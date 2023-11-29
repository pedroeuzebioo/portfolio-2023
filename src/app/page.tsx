import Image from "next/image";
import Link from "next/link";

const downloadCVLink = "/curriculo.pdf";
const emailContactLink = "mailto:eupedrohenrique.euzebio@gmail.com";

// componente renderiza a seção de links de contatos na página inicial
function ContactLinks() {
  return (
    <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
      <a
        href={downloadCVLink}
        download
        className="flex w-full max-w-xs items-center justify-center rounded-full bg-indigo-500 px-4 py-2 font-medium transition-all hover:bg-indigo-500/50 md:px-8"
      >
        Download CV
      </a>
      <Link
        href={emailContactLink}
        className="flex w-full max-w-xs items-center justify-center rounded-full border-2 border-indigo-500 bg-background px-4 py-2 font-medium transition-all hover:bg-indigo-500 md:px-8"
      >
        Entrar em contato
      </Link>
    </div>
  );
}

// componente renderiza a seção de introdução na página inicial
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
      <ContactLinks />
    </div>
  );
}

// componente renderiza a seção de introdução na página inicial
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

function TechnologiesSection() {
  const technologiesFrontEnd = [
    { name: "HTML", icon: "/html5-original.svg" },
    { name: "CSS", icon: "/css3-original.svg" },
    { name: "JavaScript", icon: "/javascript-original.svg" },
    { name: "TypeScript", icon: "/typescript-original.svg" },
    { name: "React", icon: "/react-original.svg" },
    { name: "Next.js", icon: "/nextjs-original.svg" },
    { name: "Tailwind", icon: "/tailwindcss-plain.svg" },
    { name: "Shadcn/UI", icon: "/shadcn.png" },
    { name: "CSS-in-JS", icon: "/css-in-js.png" },
    { name: "Bootstrap", icon: "/bootstrap-original.svg" },
    { name: "SASS", icon: "/sass-original.svg" },
  ];

  const technologiesBackEnd = [
    { name: "PHP", icon: "/php-original.svg" },
    { name: "Java", icon: "/java-original.svg" },
    { name: "Node.js", icon: "/nodejs-original.svg" },
    { name: "Spring", icon: "/spring-original.svg" },
    { name: "Prisma", icon: "/prisma.png" },
  ];

  const databases = [
    { name: "MySQL", icon: "/mysql-original.svg" },
    { name: "PostgreSQL", icon: "/postgresql-original.svg" },
    { name: "SQLite", icon: "/sqlite-original.svg" },
  ];

  return (
    <div>
      <h2 className="mb-4 text-center text-3xl font-medium md:text-4xl">
        Tecnologias
      </h2>

      <h3 className="mb-4 text-center text-2xl font-medium md:text-3xl">
        Front-end
      </h3>

      <div className="mb-4 flex flex-wrap items-center justify-center gap-10">
        {technologiesFrontEnd.map((tech) => (
          <div
            key={tech.name}
            className="border-text flex h-32 w-32 flex-col items-center justify-center rounded-t border-b-4 bg-indigo-800 p-4"
          >
            <p className="mb-2 text-justify text-lg font-medium md:text-xl">
              {tech.name}
            </p>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={50}
              height={50}
              sizes="100vw"
              className="tech-icon w-10"
            />
          </div>
        ))}
      </div>

      <h3 className="mb-4 text-center text-2xl font-medium md:text-3xl">
        Back-end
      </h3>

      <div className="mb-4 flex flex-wrap items-center justify-center gap-10">
        {technologiesBackEnd.map((tech) => (
          <div
            key={tech.name}
            className="border-text flex h-32 w-32 flex-col items-center justify-center rounded-t border-b-4 bg-indigo-800 p-4"
          >
            <p className="mb-2 text-justify text-lg font-medium md:text-xl">
              {tech.name}
            </p>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={50}
              height={50}
              sizes="100vw"
              className="tech-icon w-10"
            />
          </div>
        ))}
      </div>

      <h3 className="mb-4 text-center text-2xl font-medium md:text-3xl">
        Banco de dados
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {databases.map((database) => (
          <div
            key={database.name}
            className="border-text flex h-32 w-32 flex-col items-center justify-center rounded-t border-b-4 bg-indigo-800 p-4"
          >
            <p className="mb-2 text-justify text-lg font-medium md:text-xl">
              {database.name}
            </p>
            <Image
              src={database.icon}
              alt={database.name}
              width={50}
              height={50}
              sizes="100vw"
              className="tech-icon w-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-5">
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

      <section className="mt-10">
        <TechnologiesSection />
      </section>
    </main>
  );
}

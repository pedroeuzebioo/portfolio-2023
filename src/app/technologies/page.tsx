import Image from "next/image";

export default function TechnologiesSection() {
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
    <>
      <section className="mb-5 p-5">
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
              className="border-text flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-full bg-accent p-4"
            >
              <p className="mb-2 text-justify text-sm font-medium md:text-base">
                {tech.name}
              </p>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={0}
                height={0}
                sizes="100vw"
                className="m-auto h-10 w-10 object-contain"
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
              className="border-text flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-full bg-accent p-4"
            >
              <p className="mb-2 text-justify text-sm font-medium md:text-base">
                {tech.name}
              </p>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={0}
                height={0}
                sizes="100vw"
                className="m-auto h-10 w-10 object-contain"
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
              className="border-text flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-full bg-accent p-4"
            >
              <p className="mb-2 text-justify text-sm font-medium md:text-base">
                {database.name}
              </p>
              <Image
                src={database.icon}
                alt={database.name}
                width={0}
                height={0}
                sizes="100vw"
                className="m-auto h-10 w-10 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

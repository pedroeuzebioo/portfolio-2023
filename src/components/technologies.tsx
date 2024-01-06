import Image from "next/image";

const Technologies = () => {
  const technologies = [
    { name: "HTML", icon: "/html5-original.svg" },
    { name: "CSS", icon: "/css3-original.svg" },
    { name: "Javascript", icon: "/javascript-original.svg" },
    { name: "Typescript", icon: "/typescript-original.svg" },
    { name: "React", icon: "/react-original.svg" },
    { name: "Next.js", icon: "/nextjs-original.svg" },
    { name: "Tailwind", icon: "/tailwindcss-plain.svg" },
    { name: "Shadcn/UI", icon: "/shadcn.png" },
    { name: "Node.js", icon: "/nodejs-original.svg" },
    { name: "Prisma", icon: "/prisma.png" },
    { name: "PostgreSQL", icon: "/postgresql-original.svg" },
    { name: "Git", icon: "/git-original.svg" },
  ];

  return (
    <section className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-medium" id="technologies">
        Tecnologias
      </h2>

      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="border-text flex h-28 w-28 flex-col items-center justify-center rounded-full bg-accent p-6"
          >
            <p className="text-sm">{tech.name}</p>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={0}
              height={0}
              sizes="100vw"
              className="m-auto h-8 w-8 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

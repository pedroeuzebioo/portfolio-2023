"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const Technologies = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init();
    });
  }, []);

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
    <section
      className="m-auto py-[6.25rem]"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="technologies"
    >
      <h2 className="py-[0.9375rem] text-center text-2xl font-medium">
        Tecnologias
      </h2>

      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex h-[6.25rem] w-[6.25rem] flex-col items-center justify-center gap-1 rounded-full bg-accent p-[1.875rem]"
          >
            <p className="text-sm">{tech.name}</p>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={0}
              height={0}
              sizes="100vw"
              className="m-auto h-[1.875rem] w-[1.875rem] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

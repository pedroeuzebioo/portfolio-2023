"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <section
      className="m-auto mb-[9.375rem] flex max-w-5xl flex-col items-center gap-4"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-2xl font-medium" id="about">
        Sobre mim
      </h2>

      <p className="text-justify text-muted-foreground">
        Sou formado em Informática pela EEEP, com expertise em React, Next.js,
        Tailwind CSS, Node.js e SQL, utilizando Prisma para desenvolvimento
        fullstack. Experiência consolidada no IFCE Campus Baturité, atuando como
        desenvolvedor e solucionador de problemas. Anteriormente, fui Técnico de
        TI no FMAS de Baturité. Estou constantemente aprimorando minhas
        habilidades e compartilhando conhecimento. Busco oportunidades em
        projetos colaborativos.
      </p>
    </section>
  );
};

export default About;

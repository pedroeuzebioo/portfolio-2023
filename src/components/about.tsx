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
        Desenvolvedor web e graduado como técnico em informática. Especializado
        em React, Next.js, Tailwind CSS e Prisma para desenvolvimento fullstack.
        Experiência sólida no IFCE Campus Baturité, atuando em projetos
        notáveis. Atuei como Técnico de TI no FMAS de Baturité, continuo
        aprimorando minhas habilidades e compartilhando conhecimento. Busco
        oportunidades em projetos inovadores e colaborativos.
      </p>
    </section>
  );
};

export default About;

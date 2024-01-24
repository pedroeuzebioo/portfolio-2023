"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Projects = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <section className="m-auto max-w-5xl py-[6.25rem]" id="projects">
      <h2
        className="py-[0.9375rem] text-center text-2xl font-medium"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Projetos
      </h2>

      <h3
        className="py-[0.9375rem] text-center text-lg font-medium"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Destaques
      </h3>

      <div className="flex flex-col items-center gap-[1.875rem]">
        <div
          className="flex flex-col gap-4 md:h-[25rem] md:flex-row"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="/apresentation-speedyhamburguer.png"
            alt="Foto do projeto Speedy Hamburguer"
            width={0}
            height={0}
            sizes={"100vw"}
            className="h-full w-full md:max-w-3xl"
          />

          <div className="flex flex-col gap-4">
            <h3 className="text-center text-lg font-medium">
              Speedy Hamburguer
            </h3>

            <p className="text-justify text-muted-foreground">
              projeto colaborativo com colegas de curso desenvolvido para a
              feira de ciências escolar, redefine lanchonetes virtuais. Explore
              o cardápio, escolha itens e envie pedidos via WhatsApp, combinando
              praticidade e simplicidade.
            </p>

            <p className="text-justify text-muted-foreground">
              Este projeto foi desenvolvido com as seguintes tecnologias:
            </p>

            <div className="flex max-w-3xl flex-wrap items-center justify-center gap-4">
              <i className="devicon-html5-plain text-[2rem] text-primary"></i>
              <i className="devicon-css3-plain text-[2rem] text-primary"></i>
              <i className="devicon-javascript-plain text-[2rem] text-primary"></i>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-2 md:justify-start">
              <Link
                href="https://github.com/pedroeuzebioo/speedy-hamburguer"
                className="w-full"
              >
                <Button className="flex w-full items-center justify-center">
                  Acessar repositório
                </Button>
              </Link>
              <Link
                href="https://speedyhamburguer.vercel.app"
                className="w-full"
              >
                <Button className="flex w-full items-center justify-center rounded">
                  Acessar projeto
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 md:h-[25rem] md:flex-row"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="/apresentation-fsw-store.png"
            alt="Foto do projeto FSW Store"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full md:max-w-3xl"
          />

          <div className="flex flex-col gap-4">
            <h3 className="text-center text-lg font-medium">FSW Store</h3>

            <p className="text-justify text-muted-foreground">
              Sistema de e-commerce com autenticação via Google e Stripe como
              método de pagamento. Desenvolvido com as tecnologias mais modernas
              e requisitadas pelo mercado para uma experiência de e-commerce
              excepcional.
            </p>

            <p className="text-justify text-muted-foreground">
              Este projeto foi desenvolvido com as seguintes tecnologias:
            </p>

            <div className="flex max-w-3xl flex-wrap items-center justify-center gap-4">
              <i className="devicon-react-original text-[2rem] text-primary"></i>
              <i className="devicon-nextjs-original text-[2rem] text-primary"></i>
              <i className="devicon-tailwindcss-plain text-[2rem] text-primary"></i>
              <i className="devicon-nodejs-plain text-[2rem] text-primary"></i>
              <i className="devicon-postgresql-plain text-[2rem] text-primary"></i>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <Link
                href="https://github.com/pedroeuzebioo/fsw-store"
                className="w-full"
              >
                <Button className="flex w-full items-center justify-center">
                  Acessar repositório
                </Button>
              </Link>
              <Link
                href="https://fsw-store-pedroeuzebio.vercel.app"
                className="w-full"
              >
                <Button className="flex w-full items-center justify-center">
                  Acessar projeto
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 md:h-[25rem] md:flex-row"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="/apresentation-educafacilweb.png"
            alt="Foto do projeto EducaFacilWeb"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full md:max-w-3xl"
          />

          <div className="flex flex-col gap-4">
            <h3 className="text-center text-lg font-medium">EducaFacilWeb</h3>

            <p className="text-justify text-muted-foreground">
              Projeto social e de conclusão de curso técnico em informática.
              Desenvolvi um site educacional dedicado a auxiliar alunos em seus
              estudos. A plataforma oferece vídeos em diversas disciplinas,
              promovendo o aprimoramento acadêmico de forma acessível e
              interativa.
            </p>

            <p className="text-justify text-muted-foreground">
              Este projeto foi desenvolvido com as seguintes tecnologias:
            </p>

            <div className="flex items-center justify-center gap-4">
              <i className="devicon-react-original text-[2rem] text-primary"></i>
              <i className="devicon-nextjs-original text-[2rem] text-primary"></i>
              <i className="devicon-tailwindcss-plain text-[2rem] text-primary"></i>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <Link
                href="https://github.com/pedroeuzebioo/educafacilweb"
                className="w-full"
              >
                <Button className="flex w-full items-center justify-center">
                  Acessar repositório
                </Button>
              </Link>
              <Link href="https://educafacilweb.vercel.app" className="w-full">
                <Button className="flex w-full items-center justify-center">
                  Acessar projeto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="mb-5 p-5">
      <h2 className="mb-4 text-center text-3xl font-medium md:text-4xl">
        Projetos
      </h2>

      <h3 className="mb-4 text-center text-2xl font-medium md:text-3xl">
        Destaques
      </h3>

      <div className="flex flex-wrap items-center">
        <div className="mb-10">
          <div className="flex flex-col gap-3 md:flex-row">
            <Image
              src="/apresentation-speedyhamburguer.png"
              alt="speedyhamburguer"
              width={0}
              height={0}
              sizes="100vw"
              className="h-fit w-full md:w-[50vw]"
            />

            <div>
              <h3 className="mb-4 text-center text-2xl font-medium text-indigo-500 md:text-3xl">
                Speedy Hamburguer
              </h3>

              <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
                Este projeto é uma lanchonete virtual com pedidos pelo whatsapp.
                O Speedy Hamburguer é uma aplicação web projetada para facilitar
                o sistema de delivery. Nesta lanchonete os clientes podem checar
                o cardápio online, escolher o produto, adicionar ao carrinho e
                enviar os pedidos pelo whatsapp, simplificando a vida do cliente
                e do fornecedor.
              </p>

              <br />

              <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
                Este projeto foi desenvolvido com as seguintes tecnologias:
              </p>

              <br />

              <ul className="list-inside list-disc text-justify text-lg font-medium text-muted-foreground md:flex md:flex-wrap md:gap-2 md:text-xl">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>API do WhatsApp</li>
              </ul>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Link
                  href="https://github.com/eupedrohenrique/speedy-hamburguer"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 px-2 py-2 font-medium text-primary transition-all md:max-w-[200px]"
                >
                  Acessar repositório
                </Link>
                <Link
                  href="https://speedyhamburguer.vercel.app"
                  className="flex w-full items-center  justify-center rounded bg-indigo-500 px-2 py-2 font-medium text-primary transition-all md:max-w-[200px]"
                >
                  Acessar projeto
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex flex-col gap-3 md:flex-row">
            <Image
              src="/apresentation-upload-ai.png"
              alt="upload-ai"
              width={0}
              height={0}
              sizes="100vw"
              className="h-fit w-full md:w-[50vw]"
            />

            <div>
              <h3 className="mb-4 text-center text-2xl font-medium text-indigo-500 md:text-3xl">
                Upload AI
              </h3>

              <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
                Aplicação que possibilita realizar upload de videos e por meio
                de IA, criar automaticamente títulos chamativos e descrições com
                um boa indexação.
              </p>

              <br />

              <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
                Este projeto foi desenvolvido com as seguintes tecnologias:
              </p>

              <br />

              <ul className="list-inside list-disc text-justify text-lg font-medium text-muted-foreground md:flex md:flex-wrap md:gap-2 md:text-xl">
                <li>React</li>
                <li>Tailwind</li>
                <li>Shadcn/UI</li>
                <li>Axios</li>
                <li>Node.js</li>
                <li>Prisma</li>
                <li>Openai</li>
                <li>AI</li>
                <li>SQLite</li>
              </ul>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Link
                  href="https://github.com/eupedrohenrique/upload-ai"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 px-2 py-2 font-medium text-primary transition-all md:max-w-[200px]"
                >
                  Acessar repositório
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Image
              src="/apresentation-fsw-store.png"
              alt="fsw-store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-fit w-full md:w-[50vw]"
            />

            <div>
              <h3 className="mb-4 text-center text-2xl font-medium text-indigo-500 md:text-3xl">
                FSW Store
              </h3>

              <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
                Sistema de e-commerce feito com React, Next.js, Next Auth,
                Tailwind CSS, Shadcn/UI, Prisma, PostgreSQL e a Stripe como
                forma de pagamento, utilizando as tecnologias mais modernas e
                demandadas pelo mercado.
              </p>

              <br />

              <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
                Este projeto foi desenvolvido com as seguintes tecnologias:
              </p>

              <br />

              <ul className="list-inside list-disc text-justify text-lg font-medium text-muted-foreground md:flex md:flex-wrap md:gap-2 md:text-xl">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Shadcn/UI</li>
                <li>Node.js</li>
                <li>Prisma</li>
                <li>Next Auth</li>
                <li>PostgreSQL</li>
                <li>Stripe</li>
              </ul>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Link
                  href="https://github.com/eupedrohenrique/fsw-store"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 px-2 py-2 font-medium text-primary transition-all md:max-w-[200px]"
                >
                  Acessar repositório
                </Link>
                <Link
                  href="https://fsw-store-pedrohenrique.vercel.app"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 px-2 py-2 font-medium text-primary transition-all md:max-w-[200px]"
                >
                  Acessar projeto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

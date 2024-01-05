import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <main className="m-auto max-w-7xl flex-1 p-[1.875rem]">
      <section className="flex flex-col items-center justify-center gap-4">
        <h2 className=" text-2xl font-medium">Projetos</h2>

        <h3 className="text-lg font-medium">Destaques</h3>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <Image
              src="/apresentation-speedyhamburguer.png"
              alt="speedyhamburguer"
              width={0}
              height={0}
              sizes={"100vw"}
              className="h-fit w-full md:max-w-xl"
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-center text-lg font-medium text-indigo-500">
                Speedy Hamburguer
              </h3>

              <p className="text-justify text-muted-foreground">
                Uma lanchonete virtual com pedidos realizados pelo whatsapp, os
                clientes podem checar o cardápio online, escolher o produto,
                adicionar ao carrinho e enviar os pedidos pelo whatsapp.
              </p>

              <p className="text-justify font-medium text-muted-foreground">
                Este projeto foi desenvolvido com as seguintes tecnologias:
              </p>

              <ul className="list-inside list-disc text-muted-foreground md:flex md:list-outside md:list-none md:gap-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API do WhatsApp</li>
              </ul>

              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <Link
                  href="https://github.com/pedroeuzebioo/speedy-hamburguer"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 p-2 font-medium transition-colors hover:bg-indigo-500/50"
                >
                  Acessar repositório
                </Link>
                <Link
                  href="https://speedyhamburguer.vercel.app"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 p-2 font-medium transition-colors hover:bg-indigo-500/50"
                >
                  Acessar projeto
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <Image
              src="/apresentation-fsw-store.png"
              alt="fsw-store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-fit w-full md:max-w-xl"
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-center text-lg font-medium text-indigo-500">
                FSW Store
              </h3>

              <p className="text-justify text-muted-foreground">
                Sistema de e-commerce usando a Stripe como forma de pagamento e
                utilizando as tecnologias mais modernas e demandadas pelo
                mercado.
              </p>

              <p className="text-justify font-medium text-muted-foreground">
                Este projeto foi desenvolvido com as seguintes tecnologias:
              </p>

              <ul className="list-inside list-disc text-muted-foreground md:flex md:list-outside md:list-none md:flex-wrap md:gap-2">
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
                  href="https://github.com/pedroeuzebioo/fsw-store"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 p-2 font-medium transition-colors hover:bg-indigo-500/50"
                >
                  Acessar repositório
                </Link>
                <Link
                  href="https://fsw-store-pedrohenrique.vercel.app"
                  className="flex w-full items-center justify-center rounded bg-indigo-500 p-2 font-medium transition-colors hover:bg-indigo-500/50"
                >
                  Acessar projeto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

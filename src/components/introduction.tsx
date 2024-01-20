import { Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Introduction = () => {
  return (
    <section className="appear py-[6.25rem] flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-medium">Olá, eu sou o</h1>
        <span className="text-2xl font-semibold text-indigo-500">
          Pedro Euzebio
        </span>
        <p className="font-medium text-muted-foreground">
          Desenvolvedor Fullstack
        </p>
        <a
          href="/curriculo.pdf"
          download
          className="mt-4 inline-block w-[12.5rem]"
        >
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-2 rounded-full"
          >
            <Download size={16} />
            Download CV
          </Button>
        </a>
      </div>

      <Image
        src="/avatar.png"
        alt="Foto do Pedro Euzebio"
        width={250}
        height={250}
      />
    </section>
  );
};

export default Introduction;

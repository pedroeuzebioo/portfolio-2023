import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className="appear mb-[9.375rem] flex flex-col items-center justify-start gap-4 md:flex-row md:items-start md:justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-medium">Olá, eu sou o</h1>
        <span className="text-2xl font-semibold text-indigo-500">
          Pedro Euzebio
        </span>
        <p className="font-medium text-muted-foreground">
          Desenvolvedor Fullstack
        </p>
        <div className="mt-4 flex justify-center gap-2 md:justify-start w-[12.5rem]">
          <a
            href="/curriculo.pdf"
            download
            className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 p-2 font-medium hover:bg-indigo-500/50"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
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

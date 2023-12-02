import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="mb-5 p-5">
      <h2 className="mb-4 text-center text-3xl font-medium md:text-4xl">
        Contato
      </h2>

      <div className="m-auto flex max-w-[350px] flex-wrap items-center justify-center gap-10 md:max-w-full">
        <Link
          href="https://gitub.com/eupedrohenrique"
          className="flex flex-1 flex-col items-center justify-center gap-1"
        >
          <div className="rounded-full bg-accent p-5 text-indigo-500">
            <Github className="h-5 w-5" />
          </div>

          <h3 className="text-base font-medium">Github</h3>

          <p className="text-[0.500rem] font-medium text-muted-foreground md:text-xs">
            @eupedrohenrique
          </p>
        </Link>

        <Link
          href="https://linkedin.com/in/pedro-henrique-lp142830"
          className="flex flex-1 flex-col items-center justify-center gap-1"
        >
          <div className="rounded-full bg-accent p-5 text-indigo-500">
            <Linkedin className="h-5 w-5" />
          </div>

          <h3 className="text-base font-medium">LinkedIn</h3>

          <p className="text-[0.500rem] font-medium text-muted-foreground md:text-xs">
            @pedro-henrique-lp142830
          </p>
        </Link>

        <Link
          href="mailto:pedroeuzebiodev@gmail.com"
          className="flex flex-1 flex-col items-center justify-center gap-1"
        >
          <div className="rounded-full bg-accent p-5 text-indigo-500">
            <Mail className="h-5 w-5" />
          </div>

          <h3 className="text-base font-medium">E-mail</h3>

          <p className="text-[0.500rem] font-medium text-muted-foreground md:text-xs">
            eupedrohenrique.euzebio@gmail.com
          </p>
        </Link>

        <Link
          href="tel:+5585996378165"
          className="flex flex-1 flex-col items-center justify-center gap-1"
        >
          <div className="rounded-full bg-accent p-5 text-indigo-500">
            <Phone className="h-5 w-5" />
          </div>

          <h3 className="text-base font-medium">Telefone</h3>

          <p className="text-[0.500rem] font-medium text-muted-foreground md:text-xs">
            (85) 99637-8165
          </p>
        </Link>

        <Link
          href="https://instagram.com/phwebcipher"
          className="flex flex-1 flex-col items-center justify-center gap-1"
        >
          <div className="rounded-full bg-accent p-5 text-indigo-500">
            <Instagram className="h-5 w-5" />
          </div>

          <h3 className="text-base font-medium">Instagram</h3>

          <p className="text-[0.500rem] font-medium text-muted-foreground md:text-xs">
            @phwebcipher
          </p>
        </Link>
      </div>
    </section>
  );
}

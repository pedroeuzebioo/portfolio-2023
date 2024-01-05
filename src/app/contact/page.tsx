import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <main className="max-w-7xl flex-1 p-[1.875rem]">
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-medium">Contato</h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="https://github.com/pedroeuzebioo"
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="rounded-full bg-accent p-4 text-indigo-500">
              <Github size={24} />
            </div>

            <p>Github</p>
          </Link>

          <Link
            href="https://linkedin.com/in/pedro-henrique-lp142830"
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="rounded-full bg-accent p-4 text-indigo-500">
              <Linkedin size={24} />
            </div>

            <p>LinkedIn</p>
          </Link>

          <Link
            href="mailto:pedroeuzebiodev@gmail.com"
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="rounded-full bg-accent p-4 text-indigo-500">
              <Mail size={24} />
            </div>

            <p>E-mail</p>
          </Link>

          <Link
            href="tel:+5585996378165"
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="rounded-full bg-accent p-4 text-indigo-500">
              <Phone size={24} />
            </div>

            <p>Telefone</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

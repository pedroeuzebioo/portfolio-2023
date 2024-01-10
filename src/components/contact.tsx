"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <section
      className="flex flex-col items-center gap-4"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-2xl font-medium" id="contact">
        Contato
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <Link
          href="https://github.com/pedroeuzebioo"
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="rounded-full bg-accent p-4">
            <Github size={16} />
          </div>

          <p>Github</p>
        </Link>

        <Link
          href="https://linkedin.com/in/pedroeuzebio"
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="rounded-full bg-accent p-4">
            <Linkedin size={16} />
          </div>

          <p>LinkedIn</p>
        </Link>

        <Link
          href="mailto:pedroeuzebio.contato@gmail.com"
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="rounded-full bg-accent p-4">
            <Mail size={16} />
          </div>

          <p>E-mail</p>
        </Link>

        <Link
          href="tel:+5585996378165"
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="rounded-full bg-accent p-4">
            <Phone size={16} />
          </div>

          <p>Telefone</p>
        </Link>
      </div>
    </section>
  );
};

export default Contact;

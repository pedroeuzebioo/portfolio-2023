import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="mb-5 p-5">
      <h2 className="mb-4 text-center text-3xl font-medium md:text-4xl">
        Sobre mim
      </h2>

      <div className="flex flex-col gap-3 md:flex-row">
        <Image
          src="/pedro.jpg"
          alt="Foto do Pedro Henrique"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full grayscale md:max-h-[350px]"
        />

        <p className="text-justify text-lg font-medium text-muted-foreground md:text-xl">
          Minha jornada começou durante o ensino médio técnico
          profissionalizante no curso de Informática. Desde então, meu interesse
          e minha paixão por programação web cresceram no decorrer do curso.{" "}
          <br /> <br />
          Sou um entusiasta do desenvolvimento web. Minha primeira experiência
          profissional foi como Desenvolvedor Web no IFCE Campus Baturité, onde
          comecei a explorar o mundo da programação. Atualmente, atuo como
          Técnico de TI no FMAS de Baturité, onde estou envolvido em várias
          atividades relacionadas à tecnologia. <br></br> <br />
          Além do meu trabalho, tenho uma paixão por ensinar e ajudar os outros.
          Tenho o objetivo de me tornar um educador na área da programação,
          compartilhando meu conhecimento e ajudando outros a adquirir
          habilidades valiosas e seu potencial máximo. Estou sempre aberto a
          novos desafios e oportunidades de aprendizado, e estou animado para
          continuar minha jornada, com um foco em contribuir para a comunidade
          de tecnologia e fazer a diferença na vida das pessoas.
        </p>
      </div>
    </section>
  );
}

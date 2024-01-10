import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <>
      <Header />

      <main className="m-auto flex w-full max-w-7xl flex-col p-[1.875rem]">
        <Introduction />

        <About />

        <Technologies />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

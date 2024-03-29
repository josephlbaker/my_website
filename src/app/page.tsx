import Intro from "@/src/components/intro/intro";
import SectionDivider from "../components/section_divider";
import About from "../components/about";
import Projects from "../components/projects/projects";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

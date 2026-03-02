import Cursor from "@/components/Cursor";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AchievementsEducation from "@/components/AchievementsEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Navbar />

      {/* Sticky ticker below nav */}
      <div style={{ position: "fixed", top: "56px", left: 0, right: 0, zIndex: 99 }}>
        <Ticker />
      </div>

      {/* Main content offset by nav + ticker */}
      <main style={{ paddingTop: "92px" }}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <AchievementsEducation />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

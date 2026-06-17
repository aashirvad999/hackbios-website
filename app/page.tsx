import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Sponsors from "@/sections/Sponsors";
import About from "@/sections/About";
import Events from "@/sections/Events";
import Team from "@/sections/Team";
import FAQs from "@/sections/FAQs";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Events />
        <Team />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

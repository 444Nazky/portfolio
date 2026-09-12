import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStacks from "@/components/TechStacks";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStacks />
        <Certificates />
        <Experience />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
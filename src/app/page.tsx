import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center overflow-x-hidden">
      <Hero />
      <Services />
      <AboutMe />
      <Process />
      <Testimonials />
      <Showcase />
      <Footer />
    </main>
  );
}

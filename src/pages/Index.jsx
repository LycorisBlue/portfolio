import Hero from "@/components/Hero";
import About from "@/components/About";
import ParcoursSection from "@/components/ParcoursSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Navigation />
            <Hero />
            <About />
            <ParcoursSection />
            <Skills />
            <Projects />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
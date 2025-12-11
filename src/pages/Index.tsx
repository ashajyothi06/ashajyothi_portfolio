import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import VolunteerExperience from "@/components/VolunteerExperience";
import Education from "@/components/Education";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <VolunteerExperience />
      <Education />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
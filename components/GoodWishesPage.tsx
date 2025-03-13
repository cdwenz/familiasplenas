import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import TrustedCompanies from "./TrustedCompanies";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import AboutSection from "./AboutSection";

const GoodWishesPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
      <Header />
      <Hero />
      <TrustedCompanies />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default GoodWishesPage;

import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import LearnMore from "../components/Learnmore";
import Footer from "../components/Footer";

const Home = () => {
  // SECTION REFS
  const heroRef = useRef(null);
  const whyChooseRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null); // you can attach to LearnMore or Footer

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollHome={() => scrollTo(heroRef)}
        scrollServices={() => scrollTo(whyChooseRef)}
        scrollProjects={() => scrollTo(projectsRef)}
        scrollTestimonials={() => scrollTo(testimonialsRef)}
        scrollContact={() => scrollTo(contactRef)}
      />

      <section ref={heroRef}><Hero /></section>
      <section ref={whyChooseRef}><WhyChooseUs /></section>
      <section ref={aboutRef}><AboutUs /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={testimonialsRef}><Testimonials /></section>

      {/* Contact section — choose where you want scroll to land */}
      <section ref={contactRef}><LearnMore /></section>

      <Footer />
    </>
  );
};

export default Home;

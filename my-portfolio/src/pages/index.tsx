import React from "react";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

function Index() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default Index;

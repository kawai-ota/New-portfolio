import React from "react";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import About from "@/sections/About";

function Index() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default Index;

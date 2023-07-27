import React from "react";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";

function Index() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcons />
      <Email />
    </div>
  );
}

export default Index;

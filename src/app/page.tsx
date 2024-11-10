'use client';
import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
import Contact from "./component/contact";
import Project from "./component/project";
import Skills from "./component/skills";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Hero/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="projects">
        <Project/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
    </div>
  );
}

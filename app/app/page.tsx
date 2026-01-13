import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Home from "./components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TJ Neuenfeldt',
};

export default function Main() {
  return (
    <div className="font-barlow bg-grain">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

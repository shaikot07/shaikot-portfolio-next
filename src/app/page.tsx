// import NavBar from "@/Components/NavBar";

import About from "@/Components/About/About";
import Banner from "@/Components/Home/Banner";
import Projects from "@/Components/featuredProject/Projects";
import Skill from "@/Components/skill/Skill";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <About />
        <Skill />
        <Projects />
      </div>
      {/* <NavBar /> */}
    </>
  );
}

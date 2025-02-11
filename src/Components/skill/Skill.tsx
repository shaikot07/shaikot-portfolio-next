import Image from "next/image";
import SectionTitle from "../sectionTitle/SectionTitle";

const Skill = () => {
  const skills = [
    { src: "/js.png", alt: "javascript" },
    { src: "/typeScript.png", alt: "typeScript" },
    { src: "/reactl.png", alt: "react" },
    { src: "/redux.png", alt: "redux" },
    { src: "/nextjs.png", alt: "next.js" },
    { src: "/node.png", alt: "node.js" },
    { src: "/express-js.png", alt: "express" },
    { src: "/tailwind.png", alt: "tailwind" },
    { src: "/mongodb-logo.png", alt: "mongodb" },
    { src: "/mongoose.png", alt: "mongoose" },
    { src: "/html5.png", alt: "html" },
    { src: "/css.png", alt: "css" },
  ];

  const tools = [
    { src: "/vscode.png", alt: "VS Code" },
    { src: "/git.png", alt: "git" },
    { src: "/git-hub.png", alt: "github" },
    { src: "/postman.png", alt: "postman" },
    { src: "/mongodb-compass.png", alt: "MongoDB Compass" },
    { src: "/figma.png", alt: "figma" },
  ];
  return (
    <div className="my-container py-14" id="skills">
      <SectionTitle
        title={"skills"}
        subtitle={"Cutting-Edge Web Development Expertise"}
      ></SectionTitle>
      <div>
        
        <div className=" text-white py-10 px-5 lg:px-20">
          {/* Skills Section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">Skills</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center items-center">
            {skills.map((skill) => (
              <Image
                key={skill.alt}
                src={skill.src}
                alt={skill.alt}
                width={84}
                height={84}
                className="mx-auto rounded-full"
              />
            ))}
          </div>

          {/* Tools Section */}
          <div className="text-center mt-16 mb-6">
            <h2 className="text-2xl mt-8 font-semibold">Tools </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
            {tools.map((tool) => (
              <Image
                key={tool.alt}
                src={tool.src}
                alt={tool.alt}
                width={64}
                height={64}
                className="mx-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

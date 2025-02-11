import ProjectCart from "@/Components/AllProjectComonent/ProjectCart";
import SectionTitle from "@/Components/sectionTitle/SectionTitle";

const pageProjects = async () => {
  const res = await fetch("http://localhost:5000/api/projects", {
    cache: "no-store", // Ensures fresh data on each request
  });

  const { data: projects } = await res.json();
  console.log(projects);
  return (
    <div className="max-w-6xl pt-16 pb-10 mx-auto overflow-x-hidden">
  <SectionTitle
    title={"Project Showcase"}
    subtitle={"Keep thinking, keep building, keep learning."}
  />
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center place-items-center">
    {projects.map((project) => (
      <ProjectCart key={project._id} project={project} />
    ))}
  </div>
</div>
  );
};

export default pageProjects;

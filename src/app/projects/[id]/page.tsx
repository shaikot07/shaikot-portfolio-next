
import ProjectDatiles from "@/Components/AllProjectComonent/ProjectDatiles";
import { notFound } from "next/navigation";



async function getProjectDetails(id: string) {
  const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
    cache: "no-store", 
  });

  if (!res.ok) return null;

  const response = await res.json();

  return response.data;
}

export default async function ProjectDetails({params,}: {params: { id: string };}) {
  const project = await getProjectDetails(params.id);

  if (!project) return notFound();
  console.log('checkkkk', project);

  return (
    <>
    <ProjectDatiles project={project} />
   </>
  );
}





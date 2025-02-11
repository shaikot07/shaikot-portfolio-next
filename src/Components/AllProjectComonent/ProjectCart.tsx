"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCart = ({ project }) => {
  console.log("clg from card", project);
  return (

    <motion.div
    className="box"
    whileHover={{ scale: 1.05 }} // Slightly smaller hover effect
    whileTap={{ scale: 0.95 }}   // Less shrink on tap
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    <div className="max-w-sm  border border-[#15EBD1] rounded-lg shadow-sm">
      <Image
        className="rounded-t-lg"
        src={project?.projectImg || "/logo.png"}
        alt={project.projectName}
        width={400}
        height={250}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {project.projectName}
        </h5>

        <p
          className="mb-3 font-normal text-white"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          {project.projectOverview}
        </p>

        <Link href={`/projects/${project._id}`} >
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            className="cmn-btn-one"
          >
            Case Study
          </motion.button>
        </Link>
      </div>
    </div>
    </motion.div>
  );
};

export default ProjectCart;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  project: {
    projectImg: string;
    projectName: string;
    liveLink?: string;
    projectOverview: string;
    tools?: string[];
  }
}

const ProjectDatiles = ({project}: ProjectProps) => {
    console.log("detailess data in the component", project);
    return (
        <div className="pb-14 overflow-x-hidden">
      <div
        className="h-[70vh] flex items-center justify-center bg-slate-800 bg-blend-overlay bg-center bg-cover"
        style={{ backgroundImage: `url(${project?.projectImg})` }}
      >
        <div className="text-center font-semibold space-y-6 w-5/6 md:4/6 xl:w-3/6 mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
          >
            <h2 className="cmn-title-one">{project?.projectName}</h2>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.8, type: "spring", stiffness: 70 }}
          >
            <p>
              This page contains the case study of {project?.projectName} Website
              which includes the Project Overview, Tools Used and Live Links to
              the official product.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.9, type: "spring", stiffness: 70 }}
          >
            <Link href={project.liveLink || "#"} target="_blank">
              <motion.button
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                className="cmn-btn-one !mt-6"
              >
                Live Link
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="my-container space-y-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 115 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView={"visible"}
          transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
        >
          <Image
            className="w-5/6 md:w-4/6 h-auto mx-auto mt-6"
            src={project.projectImg || "/logo.png"}
            alt=""
            width={500}
            height={300}
          />
        </motion.div>

        <div className="space-y-8">
          <h2 className="cmn-title-one">Project Overview</h2>
          <p className="leading-8 text-slate-300">{project?.projectOverview}</p>
        </div>

        <div className="space-y-8 !mb-16">
          <h2 className="cmn-title-one">Tools Used</h2>
          {project?.tools?.map((p: any) => (
            <button className="btn btn-ghost mx-2 !text-white" disabled key={p}>
              {p}
            </button>
          ))}
        </div>

        <Link href={"/projects"}>
          <button className="cmn-btn-one">Go Back</button>
        </Link>
      </div>
    </div>
    );
};

export default ProjectDatiles;
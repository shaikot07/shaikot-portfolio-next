"use client";
import dailyPluse from "../../../public/img/S-02.png";
import fitnessHome from "../../../public/img/S-01.png";
import CarHub from "../../../public/img/S-03.png";
import { motion } from "framer-motion";

import Image from "next/image";
import SectionTitle from "../sectionTitle/SectionTitle";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="py-20 mb-12 my-container" >
      {/* <Design></Design> */}
      <SectionTitle
        title={"projects"}
        subtitle={
          "Here you will find some of the personal and  projects that I created with each project containing its own case study"
        }
      ></SectionTitle>
      <div className="space-y-36 mt-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 70 }}
        >
          <Link href="/projects" className="block">
            <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer gap-6 border border-[#15EBD1] rounded-lg p-6">
              <div>
                <Image
                  src={dailyPluse}
                  alt="Daily Pulse"
                  className="pointer-events-none"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="space-y-4">
                  <h2 className="font-bold text-4xl">Daily Pulse Newspaper</h2>
                  <p className="!mb-4 leading-8">
                    This is a Daily Pulse Newspaper website where you can find
                    Daily news, find jobs, read articles, and sign up or sign in
                    for more news details. I used React for the client side and
                    Firebase and Express for the server side in this project.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                    className="cmn-btn-one"
                  >
                    Case Study
                  </motion.button>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 70 }}
        >
          <Link href="/projects" className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border cursor-pointer border-[#15EBD1] rounded-lg p-6">
            <div className="flex items-center justify-center">
              <div className="space-y-4">
                <h2 className="font-bold text-4xl">Fitnes HomE</h2>
                <p className="!mb-4 leading-8">
                  Welcome to Fitnes Home, an responsive gym website where users
                  can Explore gym features, contribute, and engage with a
                  fitness home.
                </p>
              
                  <motion.button
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                    className="cmn-btn-one"
                  >
                    {" "}
                    Case Study{" "}
                  </motion.button>
                
              </div>
            </div>
            <div>
              <Image src={fitnessHome} alt="" className="pointer-events-none" />
            </div>
          </div>
          </Link>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 70 }}
        >
          <Link href={`/projects`} className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border cursor-pointer border-[#15EBD1] rounded-lg">
            <div>
              <Image src={CarHub} alt="" className="pointer-events-none" />
            </div>
            <div className="flex items-center justify-center">
              <div className="space-y-4">
                <h2 className="font-bold text-4xl"> Car Hub </h2>
                <p className="!mb-4 leading-8">
                  Welcome to Car Hub , its a car selling website! This is a
                  React-based project. here client show different different
                  brand car and knows car specification.
                </p>
              
                  <motion.button
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                    className="cmn-btn-one"
                  >
                    {" "}
                    Case Study{" "}
                  </motion.button>
               
              </div>
            </div>
          </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

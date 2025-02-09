"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import logo from "../../public/logo.png";

const NavBarTow = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTopP = window.scrollY < 100;
      setIsTop(isTopP);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  const menu = (
    <>
      <li>
        {" "}
        <Link
          className="rounded-none text-slate-50 md:px-4 md:py-2 font-bold border-b-0 hover:!text-[#15EBD1] hover:border-[#15EBD1] hover:border-b-2 transition duration-300 focus:!text-white"
          href={"/"}
        >
          Home
        </Link>{" "}
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 md:px-4 md:py-2 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 md:px-4 md:py-2 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 md:px-4 md:py-2 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="rounded-none text-slate-50 md:px-4 md:py-2 font-bold hover:!text-[#15EBD1]  hover:border-[#15EBD1] hover:border-b-2 transition duration-300"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed inset-x-0 z-40"
    >
      <div
        className={`navbar sm:w-[640px] md:w-full shadow-lg transition overflow-x-hidden  ${
          isTop ? "bg-[#02182315]" : "bg-[#0218238d]"
        }`}
      >
        <nav className=" w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            {/* <!-- Logo --> */}
            <div className=" md:order-1">
              {/* <!-- Heroicon - Chip Outline --> */}
              <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* <Link className="text-xl" to={'/'}><img src="https://i.ibb.co/tPB8G91/logo.png" className="w-10 h-auto" alt="" /></Link> */}
            <Link href="/" className="text-xl">
              <Image
                src={logo}
                alt="Logo"
                width={40} // Adjust size as needed
                height={40}
                className="w-10 h-auto"
                priority // Ensures faster loading
              />
            </Link>
           
          </motion.div>
            </div>
          
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
              <ul className="flex font-semibold justify-between">{menu}</ul>
            </div>
            <div className="order-2 md:order-3">
            <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Link
              href={
                "https://drive.google.com/uc?export=download&id=1OSAVTCJpPWk0nzlBNCFatPHA7BLV5f6e"
              }
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                className={"cmn-btn-one"}
              >
                {" "}
                Resume <FaFileDownload className="inline" />
              </motion.button>{" "}
            </Link>
          </motion.div>
            </div>
          </div>
          <button className="btn btn-primary">DaisyUI Button</button>
        </nav>
      </div>
    </motion.div>
  );
};

export default NavBarTow;

'use client'

import Link from 'next/link'
import NavBar from "../components/nav";
import JobExperince from "../components/accordion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";

export default function About() {
  return(
    <> 
     <div className="min-h-screen flex justify-center items-start p-8"> 
        <div className="max-w-2xl w-full flex flex-col"> 
            <div className="self-end mb-2 mt-20">
                <NavBar /> 
            </div>
            
            <div className="flex items-center"> 
              <Link href="/">
                <IoChevronBack className="text-xl" />
              </Link>
              <h1 className="font-raleway font-bold text-2xl ml-2"> Ashley Peng </h1> 
            </div>

            <div className="w-1/5 h-1 mb-8 ml-6 bg-pink-100" /> 

            <p className="font-raleway text-lg"> 
              Hi, I'm currently a Computer Engineering student at the University of Waterloo. I'm passionate about coding, building and exploring new things!</p>
            <br /> 
            <p className="font-raleway text-lg">
               In my free time you'll catch me exploring cafes, baking, listening to music and exploring cities.
            </p>

            <br /> 
            <h1 className="font-raleway font-bold text-2xl"> Experince </h1> 
            <JobExperince />
      
            <div className="flex justify-center gap-15 text-2xl m-10">
              <a href="https://github.com/a33peng" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ashley-peng-274114244/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:a33peng@uwaterloo.com">
                <MdEmail />
              </a>
            </div>
        </div>
      </div>
    </> 
  );
}

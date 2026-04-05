'use client'

import NavBar from "../components/nav";
import JobExperince from "../components/accordion";

export default function About() {
  return(
    <> 
     <div className="min-h-screen flex justify-center items-start p-8"> 
        <div className="max-w-2xl w-full flex flex-col"> 
            <div className="self-end mb-2 mt-20">
                <NavBar /> 
            </div>
            
            <h1 className="font-raleway font-bold text-2xl"> Ashley Peng </h1>
            <div className="w-1/5 h-1 mb-8 bg-pink-100" /> 
            <p className="font-raleway text-lg"> 
              Hi, I'm currently a Computer Engineering student at the University of Waterloo. I'm passionate about coding, building and exploring new things!</p>
            <br /> 
            <p className="font-raleway text-lg">
               In my free time you'll catch me exploring cafes, baking, listening to music and exploring cities.
            </p>

            <br /> 
            <h1 className="font-raleway font-bold text-2xl"> Experince </h1> 
            <JobExperince /> 
        </div>
      </div>
    </> 
  );
}

'use client'

import NavBar from "../components/nav";

export default function About() {
  return ( 
    <> 
     <div className="flex min-h-screen"> 
        <div className="m-80 flex flex-col"> 
            <div className="w-full">
                <NavBar /> 
            </div>
            
            <h1 className="font-raleway font-bold text-2xl"> Ashley Peng</h1>
            <div className="w-1/5 h-1 mb-8 bg-pink-100" /> 
            <p className="font-raleway text-lg "> Hi, I'm currently a Computer Engineering student at the University of Waterloo. I'm passionate about coding, building and exploring new things!</p>
            <br /> 
            <p className="font-raleway text-lg"> In my free time you'll catch me exploring cafes, baking, listening to music and exploring cities.</p>
        </div>
      </div>
    </> 
  );
}

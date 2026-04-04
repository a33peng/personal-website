'use client'

import FallingPetal from "./components/fallingPetals";
import NavBar from "./components/nav";

export default function Home() {
  return ( 
    <div className="min-h-screen flex justify-center items-start p-8">
      <div className="max-w-2xl w-full flex flex-col">
        <div className="self-end mb-40 mt-20">
          <NavBar /> 
        </div>
      
        <FallingPetal />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="font-raleway font-bold text-5xl text-center">
            hi there, i'm ashley.
          </h1>
        </div>
      </div>
    </div>
  );
}
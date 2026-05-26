'use client'

import { useState, useEffect } from 'react';
import FallingPetal from "./components/fallingPetals";
import NavBar from "./components/nav";

export default function Home() {
  const [phase, setPhase] = useState<'dark' | 'light' | 'done'>('dark');

  // fade in title animation 
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('light'), 50);   
    const t2 = setTimeout(() => setPhase('done'), 800);   
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const color =
    phase === 'dark' ? '#d4537e' :
    phase === 'light' ? '#f7cee0' :
    '#f7cee0'; 

  const translateY =
    phase === 'dark' ? '25px' : '0px';

  const opacity =
    phase === 'dark' ? 0 : 1;

  return ( 
    <div className="min-h-screen flex justify-center items-start p-8">
      <div className="max-w-2xl w-full flex flex-col">
        <div className="self-end mb-40 mt-20">
          <NavBar /> 
        </div>
      
        <FallingPetal />
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <h1
            className="font-raleway font-bold text-5xl text-center"
            style={{
              color,
              opacity,
              transform: `translateY(${translateY})`,
              transition: 'color 0.8s ease, opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            hi there, i'm ashley.
          </h1>
            <p className="font-raleway text-sm text-gray-400 tracking-wide">
              computer engineering · waterloo
            </p>
        </div>
      </div>
    </div>
  );
}
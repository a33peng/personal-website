'use client'

import FallingPetal from "./components/fallingPetals";
import NavBar from "./components/nav";

export default function Home() {
  return ( 
    <> 
      <div className="flex min-h-screen"> 
        <div className="m-100 flex flex-col my-25"> 
          <NavBar /> 
          <FallingPetal />
          <div className="flex my-auto justify-center">
            <h1 className="font-raleway font-bold text-5xl"> hi there, i'm ashley.</h1>
          </div>
        </div>
      </div> 
    </> 
  );
}

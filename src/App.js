import './App.css';

import React from "react";
import WeatherApp from "./Components/weather";

import Globe from "./Globe";

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei"; 





function App() {
  return(
    <div className='App'>
    <WeatherApp/>
    <Canvas className="globe">
      {/* <OrbitControls enableZoom={false}/> */}
      <ambientLight intensity={2}/>
      <Globe/>
    </Canvas>
    </div>
  ); 
}



export default App;

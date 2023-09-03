import React,{useRef} from "react";
import * as THREE from "three";
import {useFrame}  from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import earthImg from "./images/earthcity.jpg";
// import texture from ""


export default function Globe(){
     const base=new THREE.TextureLoader().load(earthImg);
     const ref=useRef();
     console.log(ref);
     useFrame(()=>{
          if(ref.current){
                  ref.current.rotation.y+=0.001;
               // ref.current.rotation.x=18.5196;
               // ref.current.rotation.y=73.8553;
          }
     });
     
     return (
        <mesh visible castshadow rotation={[0,90,0]} ref={ref}>
          <directionalLight intensity={2} />
             <sphereGeometry attach="geometry" args={[3,30,30]}/>
             <meshLambertMaterial map={base}/>
        </mesh>
     )
}
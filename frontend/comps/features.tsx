import React from "react";
import FeaturesCards from "./ui/featuresCards";



export default function Features(){
    return(
     <div style={{margin:"8rem 0 8rem 0"}}>
        <h1 style={{fontSize:"2rem",  margin:"0 0 -2rem 10rem", fontWeight: "bold"}}>How it works</h1>   
        <FeaturesCards/>
     </div>
    )
}
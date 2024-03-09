import React from "react";
import CarCards from "./ui/carsCards";


export default function Cars(){
    return(
     <div>
        <h1 style={{fontSize:"2rem", margin:"0 0 1rem 10rem", fontWeight: "bold",}}>Cars for Sales in Mexico</h1>   
        <CarCards/>
     </div>
    )
}
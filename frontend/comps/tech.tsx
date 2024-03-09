import React from "react";
import TechCards from "./ui/techCards";

export default function Tech(){
    const title = {
        fontSize:"2.5rem",
        fontWeight: "bold"
    }

    const description = {
        fontSize:"1.5rem"
    }
    return(
     <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"7rem 0 3rem 0"}}>
        <div style={{margin:"0 9rem 0 5rem"}}>
        <p style={title}>Our Technology</p>
        <p style={description}>Unleashing the <br/>potential of web3 <br/>in the car industry.</p>   
        </div>
        <TechCards/>
     </div>
    )
}
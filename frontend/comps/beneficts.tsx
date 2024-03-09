import React from "react"
import BenefictsCards from "./ui/benefictsCards"
import { Button } from "@/components/ui/button"

export default function Beneficts(){

    return(
        <div style={{textAlign:"center", margin:"4rem 1rem 3rem 1rem"}}>
            <p style={{fontSize:"2rem", fontWeight: "bold", color: "#1B5E20"}}>Unlock the Future of Car Trading:</p>
            <p style={{fontSize:"2rem", fontWeight: "bold", color:"#0D47A1"}}>Secure, Transparent, Decentralized</p>
            <BenefictsCards/>
            <Button style={{backgroundColor:"#3D6470", borderRadius:"1.5rem",  width:"10rem"}}>Learn More</Button>
        </div>
    )
}

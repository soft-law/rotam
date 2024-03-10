"use client";
import React, { useState } from "react";
import data from "../../_data/beneficts.json";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BenefictsCards() {
  const [beneficts, setBeneficts] = useState(data.recipes);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        height: "35rem",
      }}
    >
      {beneficts.map((benefict) => (
        <div style={{ width: "20rem"}} key={benefict.id}>
          <Card  style={{height:"28rem"}}>
            <CardHeader> <img src={benefict.image} alt={benefict.title} /></CardHeader>
            <CardContent>
             
              <p style={{fontWeight:"bold", margin:"1rem 0 2rem 0"}}>{benefict.title}</p>
              <p>{benefict.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

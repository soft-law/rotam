"use client";
import React, { useState } from "react";
import data from "../../_data/tech.json";

export default function TechCards() {
  const [techs, setTechs] = useState(data.recipes);

  const styleTitle ={
    color: "#0D47A1",
    fontSize:"2rem",
    fontWeight: "bold",
  }

  const styleDescription ={
    fontSize:"1rem"
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        textAlign: "center",
      }}
    >
      {techs.map((tech) => (
        <div style={{ display: "flex", flexDirection: "row", width: "33rem" }}>
          <img src={tech.image} alt={tech.title} style={{ width: "12rem" }}/>
          <div style={{ margin: "2rem" }}>
            <p style={styleTitle}>{tech.title}</p>
            <p style={ styleDescription}>{tech.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

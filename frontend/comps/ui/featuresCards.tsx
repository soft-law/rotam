"use client";
import React, { useState } from "react";
import data from "../../_data/features.json";

export default function FeaturesCards() {
  const [features, setFeatures] = useState(data.recipes);

  const titleStyle = {
    fontSize:"1.5rem",
    fontWeight: "bold",
    color: "#0D47A1",
    textAlign: "center" as TextAlign,
  }

  type TextAlign = "left" | "right" | "center" | "justify" | "initial" | "inherit";

  const descriptionStyle = {
    fontSize:"1rem",
    textAlign: "center" as TextAlign,
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {features.map((feature) => (
        <div
          key={feature.id}
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <div style={{ flex: "1", textAlign: "center" as TextAlign, padding:"10rem 5rem 10rem 5rem"}}>
            <p style={titleStyle}>{feature.title}</p>
            <p style={descriptionStyle}>{feature.description}</p>
          </div>

          <div style={{ width:"10%"}}>
            <div
              style={{
                borderRadius: "100%",
                width: "3rem",
                height: "3rem",
                textAlign: "center",
                padding: ".7rem 0 .7rem 0 ",
                backgroundColor: "white",
                marginTop:"13rem"
              }}
            >
              <p>{feature.id}</p>
            </div>
          </div>

          <div style={{ width: "30rem" }}>
         
            <img src={feature.image} alt={feature.title} style={{ width: "100%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

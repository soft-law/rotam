"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import data from "../../_data/features.json";

export default function FeaturesCards() {
  const [features, setFeatures] = useState(data.recipes);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {features.map((feature) => (
        <div style={{ width: "20rem", display: "flex", flexDirection: "row" }}>
          <Card key={feature.id}>
            <CardHeader>{feature.title}</CardHeader>
            <CardContent>
              <img src={feature.image} alt={feature.title} />
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

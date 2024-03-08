"use client"
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import data from "../../_data/features.json";


export default function FeaturesCards() {
    const [features, setFeatures] = useState(data.recipes);
  
    return (
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.id}>
            <CardHeader>{feature.title}</CardHeader>
            <CardContent>
              <img src={`/images/${feature.image}`} alt={feature.title} />
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
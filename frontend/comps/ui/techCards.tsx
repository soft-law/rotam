"use client"
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import data from "../../_data/tech.json";

export default function TechCards() {
    const [techs, setTechs] = useState(data.recipes);
  
    return (
      <div className="grid grid-cols-3 gap-8">
        {techs.map((tech) => (
          <Card key={tech.id}>
            <CardHeader>{tech.title}</CardHeader>
            <CardContent>
              <img src={`/images/${tech.image}`} alt={tech.title} />
              <p>{tech.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
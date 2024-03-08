"use client"
import React, { useState } from "react";
import data from "../../_data/beneficts.json";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

export default function BenefictsCards() {
  const [beneficts, setBeneficts] = useState(data.recipes);

  return (
    <div className="grid grid-cols-3 gap-8">
      {beneficts.map((benefict) => (
        <Card key={benefict.id}>
          <CardHeader>{benefict.title}</CardHeader>
          <CardContent>
            <img src={benefict.image} alt={benefict.title} />
            <p>{benefict.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
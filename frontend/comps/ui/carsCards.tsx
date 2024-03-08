"use client"
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import data from "../../_data/CarsDoomie.json";

export default function CarCards() {
    const [cars, setCars] = useState(data.recipes);
  
    return (
      <div className="grid grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id}>
            <CardHeader>{car.brand} {car.model}</CardHeader>
            <CardContent>
              <p>Year: {car.year}</p>
              <p>Color: {car.color}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  

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
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        {cars.map((car) => (
          <div style={{width:"20rem"}} key={car.id}>
          <Card  >
            <CardHeader><img src={car.image} width="250rem"/></CardHeader>
            <CardContent>
              <p>Brand: {car.brand} </p>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Color: {car.color}</p>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
    );
  }
  

import React from "react";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="flex flex-raw space-y-1.5">
      <Input type="text" placeholder="car charachterictics search" />
    <p>Filter by</p>
    <p>Brand</p>
    <p>Model</p>
    <p>Year</p>
    <p>Location</p>
    <p>Best Seller</p>
    </div>
  );
}

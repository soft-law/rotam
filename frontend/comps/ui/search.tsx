import React from "react";
import { Input } from "@/components/ui/input";

export default function Search() {

  const styleText = {
    margin:"1rem .5rem 0 1rem"
  }
  return (
    <div className="flex flex-raw space-y-1.5">
      <div style={{width:"40rem", margin:"0 1.5rem 0 3.5rem"}}>
      <Input type="text" placeholder="Search by brand, model year, etc" />
      </div>
      
    <p style={styleText}>Filter by:</p>
    <p style={styleText}>Brand</p>
    <p style={styleText}>Model</p>
    <p style={styleText}>Year</p>
    <p style={styleText}>Location</p>
    <p style={styleText}>Best Seller</p>
    </div>
  );
}

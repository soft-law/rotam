import React from "react";
import Search from "./ui/search";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Search />
      <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
      <h1 className="h1-bold"> Discover Your Next Car on the Blockchain</h1>
      <Image
        src="mainCar.svg"
        width={200}
        height={200}
        alt="Main Car Image"
      />
      <p>
        Dive into a descentralized shoping experience <br /> where every
        transaction is transparent, every car <br /> has a story, and every deal
        is sealed with trust.{" "}
      </p>
      </div>
    </div>
  );
}

import React from "react";
import Search from "./ui/search";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#E3D6FF",
        borderBottomRightRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        height: "65rem",
      }}
    >
      <Search />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
           textAlign: "center" 
        }}
      >
        <div style={{ margin: "3.5rem"}}>
          <p
            style={{
              color: "#0D47A1",
              fontSize: "65px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Discover
            <br /> Your Next Car <br /> on the Blockchain
          </p>
          <Image
            src="mainCar.svg"
            width={800}
            height={800}
            alt="Main Car Image"
          />
        </div>
        <p >
          Dive into a descentralized shoping experience <br /> where every
          transaction is transparent, every car <br /> has a story, and every
          deal is sealed with trust.{" "}
        </p>
      </div>
    </div>
  );
}

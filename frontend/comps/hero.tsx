import React from "react";
import Search from "./ui/search";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Search />
      <title>Discover Your Next Car on the Blockchain</title>
      <Image
        src="rotamLogo.svg"
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
  );
}

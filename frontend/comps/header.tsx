import React from "react";
import Image from "next/image";
import WalletConnnectButton from "./ui/connectWalletButton";

export default function Header() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "row", margin: "3rem 8rem 3rem 1rem" }}>
        <div style={{marginTop:".rem"}}>
        <Image src="/rotamLogo.svg" alt="rotam Logo" width={150} height={100} />
        </div>
        
        <p>About</p>
        <p>Technology</p>
      </div>
      <div className="flex flex-raw space-y-1.5">
        <p>Country</p>
        <p>USDC</p>
        <WalletConnnectButton />
      </div>
    </div>
  );
}

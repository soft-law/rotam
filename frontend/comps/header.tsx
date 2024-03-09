import React from "react";
import Image from "next/image";
import WalletConnnectButton from "./ui/connectWalletButton";

export default function Header() {

  const textStyle ={
    margin: "1rem 1.5rem 0 1.5rem"
  }


  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      <div style={{ display: "flex", flexDirection: "row", margin: "3rem 7rem 3rem 1rem" }}>
        <div style={{margin:"1rem 0 0 3rem"}}>
        <Image src="/rotamLogo.svg" alt="rotam Logo" width={150} height={100} />
        </div>
        
        <p style={textStyle}>About</p>
        <p style={textStyle}>Technology</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", margin: "3rem 1rem 3rem 18rem"}}>
        <p style={textStyle}>Country</p>
        <p style={textStyle}>USDC</p>
        <WalletConnnectButton />
      </div>
    </div>
  );
}

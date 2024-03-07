"use client";
import React from "react";
import { getWallets } from "@talismn/connect-wallets";
import Image from "next/image";

export default function WalletConnnectButton() {
  const fetchWallets = async () => {
    // get an array of wallets which are installed
    const installedWallets = getWallets().filter((wallet) => wallet.installed);

    // get talisman from the array of installed wallets
    const talismanWallet = installedWallets.find(
      (wallet) => wallet.extensionName === "talisman"
    );

    // enable the wallet
    if (talismanWallet) {
      try {
        await talismanWallet.enable("myCoolDapp");
        talismanWallet.subscribeAccounts((accounts: any) => {
          // do anything you want with the accounts provided by the wallet
          console.log("got accounts", accounts);
        });
      } catch (error) {
        console.error("Error enabling wallet:", error);
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        
        <button onClick={fetchWallets}>
        <Image
          src="/Talisman-Icon-Red.svg"
          width={100}
          height={100}
          alt="Picture of the author"
          onClick={fetchWallets}
        />Login</button>
      </div>
    </div>
  );
}

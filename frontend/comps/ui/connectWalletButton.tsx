"use client";
import React from "react";
import { getWallets } from "@talismn/connect-wallets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Dialog>
          <DialogTrigger asChild>
            <Button style={{backgroundColor:"#3D6470", borderRadius:"1.5rem", width:"10rem"}}>Connect Wallet</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Wallet</DialogTitle>
              <Image
                src="/Talisman-Icon-Red.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                onClick={fetchWallets}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
  
  );
}

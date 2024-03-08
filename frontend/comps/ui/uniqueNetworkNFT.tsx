"use client";
import Sdk, { Options } from "@unique-nft/sdk";
import React, { useEffect } from "react";
import { Accounts } from "@unique-nft/accounts";
import { KeyringLocalProvider } from "@unique-nft/accounts/keyring-local";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MintNFT() {
  //   const options: KeyringLocalOptions = {
  //     type: "sr25519", //
  //     passwordCallback: async (keyring: KeyringPair) => {
  //       "here you need to ask the user to enter a password to sign the transaction and return it from this callback";
  //     },
  //   };

  // const { address, availableBalance, lockedBalance, freeBalance } = sdk.balance.get({ address });

  //   const seeOptions = async () => {
  //     const provider = new KeyringLocalProvider(options);
  //     await provider.init();
  //     const accounts = new Accounts();
  //     await accounts.addProvider(provider);

  //     console.log("options");
  //   };

  // const options: KeyringLocalOptions = {
  //     type: 'sr25519', //
  //     passwordCallback: async (keyring: KeyringPair) => {
  //       "pass"
  //     },
  //   };

  return (
    <div>
      <p>GM Team</p>
      {/* <button onClick={seeOptions}>MINT</button> */}

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

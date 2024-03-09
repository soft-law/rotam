
import Beneficts from "@/comps/beneficts";
import Features from "@/comps/features";
import Cars from "@/comps/cars";
import Header from "@/comps/header";
import Hero from "@/comps/hero";
import Sells from "@/comps/sells";
import Tech from "@/comps/tech";
import MintNFT from "@/comps/ui/uniqueNetworkNFT"


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Beneficts/>
      <Tech/>
      <Cars/>
      <Features/>
      <Sells/>
   
       {/* <h1 className="h1-bold">Rotam is here</h1>  */}
      
      {/* <MintNFT/>  */}

    </div>
  );
}
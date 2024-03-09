
import Beneficts from "@/comps/beneficts";
import Features from "@/comps/features";
import Cars from "@/comps/features";
import Header from "@/comps/header";
import Hero from "@/comps/hero";
import Sells from "@/comps/sells";
import Tech from "@/comps/tech";
import TestimonialsSection from "@/comps/testimonial";
import TeamSection from "@/comps/team";
import Footer from "@/comps/footer";
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
      <TestimonialsSection/>
      <TeamSection/>
      <Footer/>
   
       {/* <h1 className="h1-bold">Rotam is here</h1>  */}
      
      {/* <MintNFT/>  */}

    </div>
  );
}
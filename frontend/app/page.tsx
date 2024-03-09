import Beneficts from "@/comps/beneficts";
import Features from "@/comps/features";
import Cars from "@/comps/cars";
import Header from "@/comps/header";
import Hero from "@/comps/hero";
import Sells from "@/comps/sells";
import Tech from "@/comps/tech";
import TestimonialsSection from "@/comps/testimonial";
import TeamSection from "@/comps/team";
import Footer from "@/comps/footer";
import MintNFT from "@/comps/ui/uniqueNetworkNFT";

//style={{}}
// background: rgb(227,214,255);
//

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#E8F5E9",
       
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(191deg, rgba(227,214,255,1) 0%, rgba(77,40,255,1) 100%)",
            borderBottomRightRadius: "2rem",
            borderBottomLeftRadius: "2rem",
        }}
      >
        <Header />
        <Hero />
      </div>

      <Beneficts />
      <Tech />
      <Cars />
      <Features />
      <Sells />
      <TestimonialsSection/>
      <TeamSection/>
      <Footer/>

      {/* <h1 className="h1-bold">Rotam is here</h1>  */}

      {/* <MintNFT/>  */}
    </div>
  );
}

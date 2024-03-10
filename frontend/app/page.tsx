import Beneficts from "@/comps/beneficts";
import Features from "@/comps/features";
import Cars from "@/comps/cars";
import Header from "@/comps/header";
import Hero from "@/comps/hero";
import Tech from "@/comps/tech";
import Verification from "@/comps/verification";
import Partner from "@/comps/PartnerDao";
import TestimonialsSection from "@/comps/testimonial";
import TeamSection from "@/comps/team";
import Footer from "@/comps/footer";

export default function Home() {
  return (
    <>
    {/* <div
     style={{
 backgroundColor: "#E8F5E9",
   }}
    > */}
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
      <Verification />
      <Partner />
      <TestimonialsSection />
      <TeamSection />
      <Footer />
    {/* </div> */}
    </>
  );
}

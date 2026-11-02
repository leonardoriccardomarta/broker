import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Services } from "@/components/sections/Services";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Services />
      <FinalCta />
    </>
  );
}

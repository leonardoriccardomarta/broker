import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Services } from "@/components/sections/Services";
import { PainPoints } from "@/components/sections/PainPoints";
import { Process } from "@/components/sections/Process";
import { LocalReviews } from "@/components/sections/LocalReviews";
import { QuickFaq } from "@/components/sections/QuickFaq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Services />
      <PainPoints />
      <Process />
      <LocalReviews />
      <QuickFaq />
      <FinalCta />
    </>
  );
}

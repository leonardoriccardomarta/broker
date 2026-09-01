import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { WhyMe } from "@/components/sections/WhyMe";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <WhyMe />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <Testimonials />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}

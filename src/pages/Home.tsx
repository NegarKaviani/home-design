import { Hero } from "../components/home/Hero";
import { AboutPreview } from "../components/home/AboutPreview";
import { CTASection } from "../components/home/CTASection"; 
import { FeatureProducts } from "../components/home/FeatureProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <CTASection />
      <FeatureProducts />
    </div>
  );
}

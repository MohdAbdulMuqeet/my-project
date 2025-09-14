import Header from "@/components/Header/Header";
import Herosection from "@/components/Herosection/Herosection";
import ScrollingFeatureCards from "@/components/ScrollingFeatureCards/ScrollingFeatureCards";
import PricingSection from "@/components/PricingSection/PricingSection";
import SixCardSection from "@/components/CardSection/SixCardSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import VideoSection from "@/components/VideoSection/VideoSection";
export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Herosection/>
        <ScrollingFeatureCards/>
        <PricingSection/>
        <SixCardSection/>
        <VideoSection/>
        <FAQSection/>
        <Footer/>
      </main>
    </div>
  );
}

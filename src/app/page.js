import Header from "@/components/Header/Header";
import Herosection from "@/components/Herosection/Herosection";
import ScrollingFeatureCards from "@/components/ScrollingFeatureCards/ScrollingFeatureCards";
import AiComparrision from "@/components/AiComparrision/AiComparrision";
import AIModelsHubShowcase from "@/components/AIModelsHubShowcase/AIModelsHubShowcase";
import AiFiestaVideoSection from "@/components/AiFiestaVideoSection/AiFiestaVideoSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Herosection/>
        <ScrollingFeatureCards/>
        <AiComparrision/>
        <AIModelsHubShowcase/>
        <AiFiestaVideoSection/>
        <FAQSection/>
        <Footer/>
      </main>
    </div>
  );
}

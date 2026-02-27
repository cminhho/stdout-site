import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsGrid from "@/components/ToolsGrid";
import PhilosophySection from "@/components/PhilosophySection";
import GetStartedSection from "@/components/GetStartedSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="">
        <HeroSection />
        <ToolsGrid />
        <PhilosophySection />
        <GetStartedSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;

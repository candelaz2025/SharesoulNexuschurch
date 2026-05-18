import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { StoriesSection } from "./components/StoriesSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { RegisterSection } from "./components/RegisterSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0805] font-['Inter','Noto_Sans_Thai',sans-serif]">
      <Navbar />
      <Hero />
      <AboutSection />
      <StoriesSection />
      <ActivitiesSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}

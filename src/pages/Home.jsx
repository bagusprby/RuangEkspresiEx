import HeroSection from "../components/HeroSection";
import EmpatPilar from "../components/EmpatPilar";
import JadwalProgram from "../components/JadwalProgram";
import Testimonials from "./Testimonials";
import Showcase from "./Showcase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EmpatPilar />
      <JadwalProgram />
      <Showcase />  
      <Testimonials />  
    </div>
  );
}

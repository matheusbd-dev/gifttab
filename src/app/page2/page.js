import Image from "next/image";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <div>
      <header className="flex flex-row bg-[#282c34] container mx-auto px-3 py-3">
        <HeroSection />
      </header>
      <main>
        <MainSection />
      </main>
    </div>
  );
}

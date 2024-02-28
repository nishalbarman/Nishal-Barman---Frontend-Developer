import BgAnimatedObjects from "@/components/BgAnimatedObjects/BgAnimatedObjects";
import Footer from "@/components/Footer/Footer";
import OurProduct from "@/components/OurProduct/OurProduct";
import OurTokens from "@/components/OurTokens/OurTokens";
import RoadMap from "@/components/RoadMap/RoadMap";
import TopSection from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between gap-[10rem]">
      {/* all background animated objects */}
      {/**/} <BgAnimatedObjects /> {/**/}
      {/* all background animated objects */}
      <TopSection />
      <OurProduct />
      <RoadMap />
      <OurTokens />
      <Footer />
    </main>
  );
}

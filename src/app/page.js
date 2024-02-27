import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OurProduct from "@/components/OurProduct/OurProduct";
import OurTokens from "@/components/OurTokens/OurTokens";
import RoadMap from "@/components/RoadMap/RoadMap";
import TopSection from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="max-[1366px]:scale-[0.9] max-[1366px]:p-[5px_0px] flex min-h-screen flex-col items-center justify-between">
      <TopSection />
      <OurProduct />
      <RoadMap />
      <OurTokens />
      <Footer />
    </main>
  );
}

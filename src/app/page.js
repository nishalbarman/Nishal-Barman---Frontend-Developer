import Footer from "@/components/Footer.jsx/Footer";
import OurProduct from "@/components/OurProduct/OurProduct";
import OurTokens from "@/components/OurTokens/OurTokens";
import RoadMap from "@/components/RoadMap/RoadMap";
import TopSection from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopSection />
      <OurProduct />
      <RoadMap />
      <OurTokens />
      <Footer />
    </main>
  );
}

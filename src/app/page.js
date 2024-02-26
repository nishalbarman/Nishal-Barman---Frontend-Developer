import OurProduct from "@/components/OurProduct/OurProduct";
import RoadMap from "@/components/RoadMap/RoadMap";
import TopSection from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopSection />
      <OurProduct />
      <RoadMap />
    </main>
  );
}

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OurProduct from "@/components/OurProduct/OurProduct";
import OurTokens from "@/components/OurTokens/OurTokens";
import RoadMap from "@/components/RoadMap/RoadMap";
import TopSection from "@/components/TopSection/TopSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-[10rem]">
      <Image
        className="absolute top-[-10rem] right-[0] opacity-[0.8]"
        src={"/bg-assets/top-right-circle.png"}
        width={1200}
        height={1200}
        alt="circle"
      />

      <Image
        className="animate-up-down absolute top-[5rem] left-0 rotate-[14deg]"
        src={"/assets/cube.svg"}
        width={132}
        height={154}
        alt="cube"
      />

      <Image
        className="z-[-1] animate-up-down absolute top-[45rem] right-0"
        src={"/assets/star-react.png"}
        width={235}
        height={235}
        alt="star"
      />

      <Image
        className="z-[-1] animate-up-down absolute left-0 top-[108rem]"
        src={"/assets/piramid.svg"}
        width={155}
        height={155}
        alt="piramid"
      />

      <Image
        className="absolute top-[40rem] left-[-30rem] opacity-[0.7]"
        src={"/bg-assets/middle-left-circle.png"}
        width={1571}
        height={1571}
        alt="circle"
      />

      <Image
        className="absolute top-[110rem] right-0 border-1 opacity-[0.3]"
        src={"/bg-assets/middle-middle-circle.png"}
        width={1100}
        height={1100}
        alt="circle"
      />

      <Image
        className="absolute top-[178rem] left-[0] border-1 opacity-[0.7]"
        src={"/bg-assets/bottom-left-circle.png"}
        width={1220}
        height={1220}
        alt="circle"
      />

      <Image
        className="animate-up-down absolute bottom-[5rem] left-0"
        src={"/assets/circle-with-star.svg"}
        width={368}
        height={264}
        alt="circle star"
      />

      <TopSection />
      <OurProduct />
      <RoadMap />
      <OurTokens />
      <Footer />
    </main>
  );
}

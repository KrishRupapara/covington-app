import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import HomeCard from "@/components/HomeCard";
import BgImg from "@/components/ui/BgImg";

export default function HomeComponent() {
  return (
    <section className="w-screen" style={{ height: "calc(100vh - 6rem)" }}>
      <div className="grid grid-rows-[2fr_1fr] h-full">
        <div className="bg-coverColor grid place-content-center relative">
          <HomeCard />
          <BgImg
            src={"/img/bg-cover.webp"}
            alt="Image cover"
            className="aspect-[16/9] object-cover" 
            sizes="(min-width: 420px) 100vw, calc(16vw + 336px)"
          />
        </div>
        <div className="grid grid-cols-3">
          <InfoCard
            head="Modern Design"
            img={"/img/bg-2.webp"}
            sizes="(min-width: 420px) 33.33vw, calc(5vw + 113px)"
          />
          <InfoCard
            head="Construction Managment"
            img={"/img/bg-3.webp"}
            sizes="(min-width: 420px) 33.33vw, calc(5vw + 113px)"
          />
          <InfoCard
            head="General Contractor"
            img={"/img/bg-4.webp"}
            sizes="(min-width: 420px) 33.33vw, calc(5vw + 113px)"
          />
        </div>
      </div>
    </section>
  );
}

import InfoCard from "@/components/InfoCard";
import HomeCard from "@/components/HomeCard";
import Image from "next/image";

export default function HomeComponent() {
  return (
    <section
      className="w-screen overflow-hidden relative"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="grid grid-rows-[2fr_1fr] h-full">
        <div className="grid place-content-center relative bg-image">
          <HomeCard />
          <Image
            src={"/img/bg-cover.webp"}
            alt="Image"
            className="aspect-video object-cover absolute -z-10"
            sizes="(min-width: 420px) 100vw, calc(16vw + 336px)"
            fill
          />
        </div>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
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

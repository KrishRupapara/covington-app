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
          <BgImg src={"/img/bg-cover.webp"} alt="Image cover" />
        </div>
        <div className="grid grid-cols-3">
          <InfoCard head="Modern Design" img={"/img/bg-2.webp"} />
          <InfoCard head="Construction Managment" img={"/img/bg-3.webp"} />
          <InfoCard head="General Contractor" img={"/img/bg-4.webp"} />
        </div>
      </div>
    </section>
  );
}

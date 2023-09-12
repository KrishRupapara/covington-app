import Image from "next/image";
import InfoCard from "./InfoCard";
import HomeCard from "./HomeCard";

export default function HomeComponent() {
  return (
    <section className="w-screen h-screen pt-24">
      <div className="grid grid-rows-[2fr_1fr] h-full">
        <div className="bg-coverColor grid place-content-center">
          <HomeCard />
          <Image
            src="/img/bg-cover.webp"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Image cover"
            className="-z-10"
          />
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

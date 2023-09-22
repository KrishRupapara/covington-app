import { FC } from "react";
import BgImg from "./ui/BgImg";
import Image from "next/image";

interface LatestProjProps {}

const LatestProj: FC<LatestProjProps> = ({}) => {
  return (
    <section
      className="w-screen overflow-hidden flex flex-col"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <h1 className="p-8 font-bold tracking-widen text-lg text-center">
        LATEST PROJECTS
      </h1>
      <div className="grid grid-cols-3 grow text-mildWhite">
        <BgImg
          src={"/img/latest-proj-1.webp"}
          className="border-r"
          alt="Latest Project 1"
          bgClass="bg-projcard relative"
        >
          <div className="p-10 tracking-[0.3em]">
            <h1 className="font-bold text-xl">PRIMIS OFFICE</h1>
            <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
          </div>
        </BgImg>
        <BgImg
          src={"/img/latest-proj-2.webp"}
          className="border-r"
          alt="Latest Project 2"
          bgClass="bg-projcard relative"
        >
          <div className="p-10 tracking-[0.3em] read-more cursor-pointer">
            <h1 className="font-bold text-xl">DAMON RESORT</h1>
            <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
            <div className="absolute bottom-10 flex gap-3 red-more__div">
              <h1 className="font-bold transition-all duration-300 read-more__heading pr-4 ">
                {" "}
                READ MORE
              </h1>

              <div className="arrow w-20"></div>
            </div>
          </div>
        </BgImg>
        <div className="grid grid-rows-[4fr_2fr]">
          <BgImg
            src={"/img/latest-proj-3.webp"}
            className="border-b"
            alt="Latest Project 3"
            bgClass="bg-projcard relative"
          >
            <div className="p-10 tracking-[0.3em]">
              <h1 className="font-bold text-xl">POSUERE HOSPITAL</h1>
              <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
            </div>
          </BgImg>
          <BgImg
            src={"/img/latest-proj-4.webp"}
            alt="Latest Project 4"
            bgClass="bg-projcard relative"
          >
            <div className="p-10 tracking-[0.3em]">
              <h1 className="font-bold text-xl">DIMEN CENTER</h1>
              <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
            </div>
          </BgImg>
        </div>
      </div>
    </section>
  );
};

export default LatestProj;

import { FC } from "react";
import BgImg from "./ui/BgImg";

interface LatestProjProps {}

const LatestProj: FC<LatestProjProps> = ({}) => {
  return (
    <section
      className="w-screen flex flex-col h-scree"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <h1 className="p-8 font-bold tracking-widen text-lg text-center">
        LATEST PROJECTS
      </h1>
      <div className="grid grid-cols-3 grow">
        <BgImg
          src={"/img/latest-proj-1.webp"}
          className="border-r"
          alt="Latest Project 1"
          bgClass="bg-projcard relative"
        />
        <BgImg
          src={"/img/latest-proj-2.webp"}
          className="border-r"
          alt="Latest Project 2"
          bgClass="bg-projcard relative"
        />
        <div className="grid grid-rows-[4fr_2fr]">
          <BgImg
            src={"/img/latest-proj-3.webp"}
            className="border-b"
            alt="Latest Project 3"
            bgClass="bg-projcard relative"
          />
          <BgImg
            src={"/img/latest-proj-4.webp"}
            alt="Latest Project 4"
            bgClass="bg-projcard relative"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestProj;

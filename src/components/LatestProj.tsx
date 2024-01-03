import BgImg from "./ui/BgImg";
import { MoveRight } from "lucide-react";

const LatestProj = ({}) => {
  return (
    <section
      className="w-screen overflow-hidden flex flex-col"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <h1 className="p-8 font-bold tracking-widen text-lg text-center">
        LATEST PROJECTS
      </h1>
      <div className="grid grid-rows-[2fr_1fr] grid-cols-2 md:grid-rows-1 md:grid-cols-3 grow text-mildWhite">
        <BgImg
          src={"/img/latest-proj-1.webp"}
          className="border-r aspect-video object-cover"
          alt="Latest Project 1"
          bgClass="bg-projcard relative"
          sizes="33.3vw"
        >
          <div className="p-10 tracking-[0.3em] flex flex-col 8tems-center justify-center">
            <h1 className="font-bold text-xl">PRIMIS OFFICE</h1>
            <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
          </div>
        </BgImg>
        <BgImg
          src={"/img/latest-proj-2.webp"}
          className="border-r aspect-video object-cover"
          alt="Latest Project 2"
          bgClass="bg-projcard relative"
          sizes="33.3vw"
        >
          <div className="p-10 tracking-[0.3em] cursor-pointer flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl">DAMON RESORT</h1>
            <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
            <div className="group absolute bottom-10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6">
              <h1 className="font-bold transition-all duration-300 group-hover:translate-x-4 group-hover:-skew-x-[20deg]">
                {" "}
                READ MORE
              </h1>
              <div className="flex items-center transition-all duration-300 group-hover:translate-x-4">
                <span className="w-20 h-[0.1rem] bg-white rounded-md -mr-[14px]" />
                <MoveRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </BgImg>
        <div className="grid grid-cols-2 grid-rows-1 col-start-1 col-end-3 md:col-start-3 md:grid-cols-1 md:grid-rows-[4fr_2fr]">
          <BgImg
            src={"/img/latest-proj-3.webp"}
            className="md:border-b aspect-video object-cover"
            alt="Latest Project 3"
            bgClass="bg-projcard relative"
            sizes="(min-width: 800px) 33.32vw, 249px"
          >
            <div className="p-10 tracking-[0.3em] flex flex-col items-center justify-center">
              <h1 className="font-bold text-xl">POSUERE HOSPITAL</h1>
              <h2 className="text-xs pt-1">OFFICE , INTERIOR DESIGN</h2>
            </div>
          </BgImg>
          <BgImg
            src={"/img/latest-proj-4.webp"}
            alt="Latest Project 4"
            className="aspect-video object-cover "
            bgClass="bg-projcard relative"
            sizes="(min-width: 800px) 33.32vw, 249px"
          >
            <div className="p-10 tracking-[0.3em] flex flex-col items-center justify-center">
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

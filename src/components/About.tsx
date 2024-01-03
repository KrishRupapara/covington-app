import { cn } from "@/lib/utils";
import BgImg from "./ui/BgImg";
import { leelawad } from "@/utils/font";

export default function About() {
  return (
    <section
      className="flex flex-col w-screen overflow-hidden"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className="flex flex-col items-center justify-center w-full gap-2 pt-2 mx-auto h-1/4 md:w-4/5 tracking-widen">
        <h1 className="font-sans text-lightGray">WORKING WITH US</h1>
        <h1 className="w-full mb-1 text-xs font-bold text-center md:text-md text-primary xl:w-1/2">
          WE DESIGN, CONSTRUCT, REFURBISH AND OPERATE OUTSTANDING BUILDINGS.
        </h1>
        <button className="font-sans tracking-widen bg-[#D9D9D9] text-[#7B7B7B] px-10 py-2 mb-2">
          GET A QUOTE
        </button>
      </div>
      <div className="h-3/4 flex items-center flex-col xl:flex-row  justify-between bg-gradient-to-l from-[#212121] from-[51.04%] to-[#21212100] to-[66.15%] overflow-hidden">
        <div className="bg-gradient-to-r from-[#00000080] from-[50%] h-full w-full">
          <BackgroundImage />
        </div>
        <div className="flex items-center justify-center w-full h-full bg-[#212121] xl:w-3/5">
          <div className="grid items-center w-4/5 grid-cols-2 grid-rows-3 h-4/5">
            <Header
              num="36+"
              word="PROJECT"
              className="col-start-2 row-start-1"
              position="left-20"
            />
            <Header
              num="172"
              word="HAPPY CLIENT"
              className="col-start-1 row-start-2"
              position="left-24"
            />
            <Header
              num="15"
              word="AWARDS"
              className="col-start-2 row-start-3"
              position="left-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const BackgroundImage = () => {
  return (
    <BgImg
      src={"/img/about-us.webp"}
      alt="about us image"
      className="object-cover aspect-video"
      bgClass="relative flex items-center h-full justify-center w-full xl:w-4/5"
      sizes="50vw"
    >
      <BgImg
        src={"/img/about-us-figure.webp"}
        alt="figure"
        className="aspect-[2/1] object-cover"
        bgClass="z-10 h-[inherit]"
        sizes="50vw"
      />

      <div className="z-0 flex flex-col w-3/4 h-4/5 justify-evenly">
        <h1 className="text-lg font-bold text-white tracking-widen">
          TESTIMONIALS
        </h1>
        <p className="text-[#E8E8E8] font-sans tracking-wider -z-10 text-sm md:text-lg">
          Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo,
          et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc,
          iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit
          amet lacinia massa
        </p>
        <div
          className={cn(leelawad.className, "text-mildWhite tracking-[0.2em]")}
        >
          <h1 className="font-bold text-md md:text-2xl">CHERYL CRUZ</h1>
          <h1 className="text-md md:text-xl">
            Senior Engineer,
            <span className="font-bold tracking-widen">COVINGTON</span>
          </h1>
        </div>
      </div>
    </BgImg>
  );
};

const Header = ({
  num,
  word,
  className,
  position,
}: {
  num: string;
  word: string;
  className?: string;
  position?: string;
}) => {
  return (
    <div className={cn(className, "relative")}>
      <h1 className="text-3xl md:text-6xl tracking-tighter text-[#ffffff33] font-extrabold">
        {num}
      </h1>
      <h1
        className={cn(
          position,
          "absolute top-[0.6rem] -translate-x-1/4 md:top-[1.1rem] whitespace-nowrap tracking-widen font-bold text-sm md:text-xl text-white"
        )}
      >
        {word}
      </h1>
    </div>
  );
};

import { cn } from "@/lib/utils";
import BgImg from "./ui/BgImg";

export default function About() {
  return (
    <section
      className="w-screen overflow-hidden"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <div className="h-1/4 flex items-center justify-center flex-col tracking-widen gap-2">
        <h1 className="font-sans text-lightGray">WORKING WITH US</h1>
        <h1 className="text-primary font-bold w-1/2 text-center mb-1">
          WE DESIGN, CONSTRUCT, REFURBISH AND OPERATE OUTSTANDING BUILDINGS.
        </h1>
        <button className="font-sans tracking-widen bg-[#D9D9D9] text-[#7B7B7B] px-10 py-2 mb-2">
          GET A QUOTE
        </button>
      </div>
      <div className="h-3/4 flex justify-between bg-gradient-to-l from-primary from-[52.08%] to-[#21212100] to-[66.15%] z-10 overflow-hidden">
        <BackgroundImage />
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-4/5 h-4/5 grid grid-rows-3 grid-cols-2 items-center">
            <Header
              num="36+"
              word="PROJECT"
              className="row-start-1 col-start-2"
              position="left-20"
            />
            <Header
              num="172"
              word="HAPPY CLIENT"
              className="row-start-2 col-start-1"
              position="left-24"
            />
            <Header
              num="15"
              word="AWARDS"
              className="row-start-3 col-start-2"
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
      className="aspect-[16/9] object-cover"
      bgClass="relative bg-gradient-to-r from-[#00000080] from-[50%] flex items-center h-full justify-center w-3/5"
      sizes="50vw"
    >
      <BgImg
        src={"/img/about-us-figure.webp"}
        alt="figure"
        className="aspect-[2/1] object-cover"
        bgClass="z-10 h-[inherit]"
        sizes="50vw"
      />

      <div className="h-4/5 z-0 w-3/4 flex justify-evenly flex-col">
        <h1 className="text-white font-bold text-lg tracking-widen">
          TESTIMONIALS
        </h1>
        <p className="text-[#E8E8E8] font-sans tracking-wider -z-10">
          Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo,
          et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc,
          iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit
          amet lacinia massa
        </p>
        <div className="text-mildWhite font-sans tracking-widen">
          <h1 className="text-2xl font-bold">CHERYL CRUZ</h1>
          <h1 className="text-xl">
            Senior Engineer,
            <span className="font-bold">COVINGTON</span>
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
      <h1 className="text-6xl tracking-tighter text-[#ffffff33] font-extrabold">
        {num}
      </h1>
      <h1
        className={cn(
          position,
          "absolute top-[1.1rem] whitespace-nowrap tracking-widen font-bold text-xl text-white"
        )}
      >
        {word}
      </h1>
    </div>
  );
};

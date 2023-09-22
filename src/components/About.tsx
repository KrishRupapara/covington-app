import BgImg from "./ui/BgImg";

export default function About() {
  return (
    <section className="w-screen" style={{ height: "calc(100vh - 6rem)" }}>
      <div className="h-1/3 flex items-center justify-center flex-col tracking-widen gap-2">
        <h1 className="font-sans text-lightGray">WORKING WITH US</h1>
        <h1 className="text-primary font-bold w-1/2 text-center pb-5">
          WE DESIGN, CONSTRUCT, REFURBISH AND OPERATE OUTSTANDING BUILDINGS.
        </h1>
        <button className="font-sans tracking-widen bg-[#D9D9D9] text-[#7B7B7B] px-10 py-2">
          GET A QUOTE
        </button>
      </div>
      <div className="h-2/3 grid grid-cols-2 bg-gradient-to-l from-primary from-[52.08%] to-[#21212100] to-[66.15%] z-10">
        <BackgroundImage />
        <div>
          <Header num="36+" word="PROJECT" />
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
      bgClass="relative bg-gradient-to-r from-[#00000080] from-[50%] flex items-center h-full justify-center"
    >
      <BgImg
        src={"/img/about-us-figure.webp"}
        alt="figure"
        bgClass="z-10 h-[inherit]"
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

const Header = ({ num, word }: { num: string; word: string }) => {
  return (
    <div className="flex items-center w-fit border relative">
      <h1 className="text-6xl tracking-tighter text-[#ffffff33] font-extrabold">
        {num}
      </h1>
      <h1 className="absolute right-0 translate-x-[40%] tracking-widen font-bold text-white">
        {word}
      </h1>
    </div>
  );
};

import localFont from "next/font/local";

const leelawad = localFont({
  src: "../../public/fonts/leelawad.ttf",
});

const HomeCard = () => {
  return (
    <div className="bg-none text-mildWhite text-center flex flex-col items-center">
      <div className="w-14 h-8 rounded-[3rem] border-mildWhite border-[7px]"></div>
      <h1 className={leelawad.className + " tracking-widen pt-3 pl-2"}>
        WELCOME TO
      </h1>
      <h1 className="tracking-[0.6rem] text-4xl font-bold py-1">COVINGTON</h1>
      <h1
        className={leelawad.className + " tracking-widen font-bold pl-1 pt-1"}
      >
        {" "}
        CONSTRUCTION SOLUTION
      </h1>
      <div className="pt-8"></div>
      <div className={leelawad.className + " flex gap-3"}>
        <button className="bg-mildWhite text-primary py-3 px-10 text-sm font-bold tracking-widen transition-colors border border-mildWhite hover:text-mildWhite hover:bg-transparent">
          OUR PROJECTS
        </button>
        <button className="border border-mildWhite py-3 px-10 text-sm font-bold tracking-widen transition-colors hover:text-primary hover:bg-mildWhite">
          {" "}
          GET A QUOTE
        </button>
      </div>
      <div className="pt-20 flex gap-6 pl-2">
        <div className="bg-slide w-10 h-[4px] cursor-pointer"></div>
        <div className="bg-mildWhite w-10 h-[4px] cursor-pointer"></div>
        <div className="bg-slide w-10 h-[4px] cursor-pointer"></div>
      </div>
    </div>
  );
};

export default HomeCard;

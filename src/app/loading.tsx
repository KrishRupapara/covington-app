import localFont from "next/font/local";

const mountExtended = localFont({
  src: "../../public/fonts/PPMonumentExtended-Regular.otf",
});

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 text-3xl text-primary">
      <svg width="120" height="124" className="">
        <rect
          x="50"
          y="50"
          rx="15"
          ry="15"
          width="60"
          height="30"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeMiterlimit="100"
        />
      </svg>
      <h1 className={mountExtended.className + " font-bold tracking-[0.2rem]"}>
        COVINGTON
      </h1>
    </div>
  );
}

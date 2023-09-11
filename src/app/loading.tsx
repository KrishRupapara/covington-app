import localFont from "next/font/local";

const mountExtended = localFont({
  src: "../../public/fonts/PPMonumentExtended-Regular.otf",
});

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen gap-3 text-3xl text-primary">
      <div className="w-20 h-12 rounded-[3rem] relative logo"></div>
      <h1 className={mountExtended.className + " font-bold tracking-[0.2rem]"}>
        COVINGTON
      </h1>
    </div>
  );
}

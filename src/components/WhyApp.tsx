import BgImg from "./ui/BgImg";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const leelawad = localFont({
  src: "../../public/fonts/leelawad.ttf",
});

export default function WhyApp() {
  return (
    <div
      className="w-screen relative overflow-hidden bg-gradient-to-l from-primary from-[52.08%] to-[#21212100]"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <div className="top-1/2 absolute left-1/2 z-10 -translate-x-[30%] -translate-y-[45%] flex flex-col justify-evenly h-4/5">
        <h1 className="text-mildWhite text-xl tracking-widen">
          WHY CHOOSE COVINGTON
        </h1>

        <div className="flex flex-col justify-between items-center gap-10">
          <BodyCard
            title="Transparency"
            description="Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar malesuada. Suspendisse eu rhoncus ligula."
          />
          <BodyCard
            title="Expertise"
            description="Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar malesuada. Suspendisse eu rhoncus ligula."
          />
          <BodyCard
            title="Reliability"
            description="Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar malesuada. Suspendisse eu rhoncus ligula."
          />
        </div>
      </div>
      <BgImg
        src={"/img/why-cover.webp"}
        alt="Why choose Ableton"
        bgClass="w-1/2 h-[inherit] relative bg-[#21212166]"
      />
    </div>
  );
}

function BodyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={cn(leelawad.className + " ")}>
      <h1 className="text-mildWhite tracking-widen relative pb-2 after:w-screen after:h-[1px] after:bg-lightGray after:absolute after:top-4 after:ml-2 text-lg">
        {title}
      </h1>
      <p className="text-lightGray tracking-wider lg:w-2/3 md:w-full">
        {description}
      </p>
    </div>
  );
}

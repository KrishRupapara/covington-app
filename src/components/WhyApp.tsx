import BgImg from "./ui/BgImg";
import { cn } from "@/lib/utils";
import { leelawad } from "@/utils/font";

export default function WhyApp() {
  return (
    <div
      className="w-screen relative overflow-hidden bg-gradient-to-l from-[#212121] from-[52.08%] to-[#21212100]"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className="top-1/2 absolute left-1/2 z-10 -translate-x-[30%] -translate-y-[45%] flex flex-col justify-evenly h-4/5">
        <h1 className="text-xl text-mildWhite tracking-widen">
          WHY CHOOSE COVINGTON
        </h1>

        <div className="flex flex-col items-center justify-between gap-10">
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
        className="object-cover aspect-video"
        bgClass="w-1/2 h-[inherit] relative bg-[#21212166]"
        sizes="50vw"
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
      <p className="tracking-wider text-lightGray lg:w-2/3 md:w-full">
        {description}
      </p>
    </div>
  );
}

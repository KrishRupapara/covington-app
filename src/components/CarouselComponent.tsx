"use client";
import { FC, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import BgImg from "./ui/BgImg";
import { MoveLeft, MoveRight } from "lucide-react";

interface CarouselProps {}

const Carousel: FC<CarouselProps> = ({}) => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="w-screen overflow-hidden">
      <MotionConfig transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}>
        <motion.div
          className="flex items-center gap-20 w-fit flex-nowrap"
          animate={{ x: `${activeCard}%` }}
        >
          <BgImg
            src={cardData[(activeCard + 3) % 4].img}
            alt="card"
            className="aspect-[16/9] object-cover"
            bgClass="w-[35rem] h-[10rem] -ml-[30rem] relative bg-[#00000066]"
            sizes="560px"
          />
          <BgImg
            src={cardData[activeCard].img}
            alt="Main card"
            className="aspect-[16/9] object-cover"
            bgClass="w-[35rem] h-[15rem] relative"
            sizes="560px"
          />
          <BgImg
            src={cardData[(activeCard + 1) % 4].img}
            alt="card"
            className="aspect-[16/9] object-cover"
            bgClass="w-[35rem] h-[10rem] relative bg-[#00000066]"
            sizes="560px"
          />
          <BgImg
            src={cardData[(activeCard + 2) % 4].img}
            alt="card"
            className="aspect-[16/9] object-cover"
            bgClass="w-[35rem] h-[10rem] -mr-[30rem] relative bg-[#00000066]"
            sizes="560px"
          />
        </motion.div>
      </MotionConfig>

      <div className="relative w-3/4 mx-auto mt-10">
        <div>
          <h1 className="absolute text-primary opacity-20 text-[6rem] -top-12 -left-8 font-extrabold">
            {cardData[activeCard].key}
          </h1>
          <h1 className="w-1/2 text-sm font-bold tracking-widen">
            {cardData[activeCard].title}
          </h1>
          <div className="flex items-center justify-between mt-10">
            <p className="w-3/4 font-sans text-sm tracking-wide text-lightGray">
              {cardData[activeCard].desc}
            </p>
            <div className="relative flex items-center gap-4">
              <button onClick={() => setActiveCard((activeCard + 3) % 4)}>
                <div className="flex items-center">
                  <MoveLeft className="w-4 h-4" />
                  <span className="w-10 h-[0.1rem] bg-black rounded-md -ml-[14px]" />
                </div>
              </button>
              <button onClick={() => setActiveCard((activeCard + 1) % 4)}>
                <div className="flex items-center">
                  <span className="w-10 h-[0.1rem] bg-black rounded-md -mr-[14px]" />
                  <MoveRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-3/4 mx-auto mt-10 cursor-pointer read-more">
        <div className="absolute flex gap-3 group">
          <h1 className="font-bold transition-all duration-300 group-hover:translate-x-4 group-hover:-skew-x-[20deg]">
            {" "}
            READ MORE
          </h1>
          <div className="flex items-center transition-all duration-300 group-hover:translate-x-4">
            <span className="w-20 h-[0.1rem] bg-black rounded-md -mr-[14px]" />
            <MoveRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    key: "1",
    title: "U.S construction scheme hits maximum marks for safety",
    img: "/img/bg-cover.webp",
    desc: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
  },
  {
    key: "2",
    title: "U.S construction scheme hits maximum marks for safety",
    img: "/img/latest-proj-4.webp",
    desc: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
  },
  {
    key: "3",
    title: "U.S construction scheme hits maximum marks for safety",
    img: "/img/bg-4.webp",
    desc: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
  },
  {
    key: "4",
    title: "U.S construction scheme hits maximum marks for safety",
    img: "/img/bg-3.webp",
    desc: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
  },
];

export default Carousel;

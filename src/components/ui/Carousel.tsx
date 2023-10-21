"use client";
import { FC, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import BgImg from "./BgImg";

interface CarouselProps {}

const Carousel: FC<CarouselProps> = ({}) => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="">
      <MotionConfig transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}>
        <motion.div
          className="flex w-fit items-center flex-nowrap gap-20"
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

      <div className="w-3/4 mx-auto relative mt-10">
        <div>
          <h1 className="absolute text-primary opacity-20 text-[6rem] -top-12 -left-8 font-extrabold">
            {cardData[activeCard].key}
          </h1>
          <h1 className="tracking-widen font-bold w-1/2 text-sm">
            {cardData[activeCard].title}
          </h1>
          <div className="flex items-center justify-between mt-10">
            <p className="font-sans text-lightGray w-3/4 text-sm tracking-wide">
              {cardData[activeCard].desc}
            </p>
            <div className="relative">
              <button onClick={() => setActiveCard((activeCard + 1) % 4)}>
                <div
                  className="arrow w-20 before:bg-black before:w-10 before:border-black after:border-black cursor-pointer"
                  onClick={() => setActiveCard(activeCard + 1)}
                ></div>
              </button>
              <button onClick={() => setActiveCard((activeCard + 3) % 4)}>
                <div className="arrow w-20 rotate-[180deg] -translate-x-1/4 -mt-1 before:w-10  before:bg-black before:border-black after:border-black cursor-pointer"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 w-3/4 mx-auto read-more cursor-pointer">
        <div className="absolute flex gap-3">
          <h1 className="font-bold transition-all duration-300 tracking-widen pr-4 read-more__heading">
            {" "}
            READ MORE
          </h1>

          <div className="arrow w-20 before:bg-black before:border-black after:border-black"></div>
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

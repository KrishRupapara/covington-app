"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { leelawad } from "@/utils/font";
import { useEffect, useState } from "react";

const HomeCard = () => {
  const [curr, setCurr] = useState(0);
  const [anim, setAnim] = useState("anim");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnim("in");
      setTimeout(() => {
        setAnim("out");
      }, 2500);
      setCurr((curr) => (curr + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [curr]);

  const variants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
  };

  return (
    <div className="bg-none text-mildWhite text-center flex flex-col items-center">
      <motion.div
        className="flex flex-col items-center"
        animate={anim}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
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
      </motion.div>
      <div className="pt-20 flex gap-6 pl-2">
        <div
          onClick={() => setCurr(0)}
          className={cn(
            curr === 0 ? "bg-mildWhite" : "bg-slide",
            "  w-10 h-[4px] cursor-pointer"
          )}
        ></div>
        <div
          onClick={() => setCurr(1)}
          className={cn(
            curr === 1 ? "bg-mildWhite" : "bg-slide",
            "  w-10 h-[4px] cursor-pointer"
          )}
        ></div>
        <div
          onClick={() => setCurr(2)}
          className={cn(
            curr === 2 ? "bg-mildWhite" : "bg-slide",
            "  w-10 h-[4px] cursor-pointer"
          )}
        ></div>
      </div>
    </div>
  );
};

export default HomeCard;

import { FC } from "react";
import localFont from "next/font/local";
import BgImg from "./ui/BgImg";

const leelawad = localFont({
  src: "../../public/fonts/leelawad.ttf",
});

interface InfoCardProps {
  head: string;
  img: string;
}

const InfoCard: FC<InfoCardProps> = ({ head, img }) => {
  return (
    <div
      className={
        leelawad.className +
        " h-full grid place-content-center relative text-center bg-card px-16 border-r"
      }
    >
      <BgImg src={img} alt={head} />
      <h1 className="text-lg mb-2 font-bold text-mildWhite">{head}</h1>
      <p className="block text-dullWhite">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel unde nam
        aut vero?
      </p>
    </div>
  );
};

export default InfoCard;

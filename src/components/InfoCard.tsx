import { FC } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { leelawad } from "@/utils/font";

interface InfoCardProps {
  head: string;
  img: string;
  sizes?: string;
}

const InfoCard: FC<InfoCardProps> = ({ head, img, sizes }) => {
  return (
    <div
      className={cn(
        leelawad.className,
        "h-inherit grid place-content-center relative text-center px-16 py-4 border-r bg-darkGray"
      )}
    >
      <Image
        src={img}
        alt={head}
        sizes={sizes}
        className="absolute -z-10 object-cover aspect-video"
        fill
      />
      <h1 className="text-lg mb-2 font-bold text-mildWhite">{head}</h1>
      <p className="text-dullWhite">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel unde nam
        aut vero?
      </p>
    </div>
  );
};

export default InfoCard;

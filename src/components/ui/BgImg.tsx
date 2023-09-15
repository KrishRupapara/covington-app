import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface BgImgProps extends ImageProps {
  bgClass?: string;
}

const BgImg: FC<BgImgProps> = ({ bgClass, src, className, alt, ...props }) => {
  return (
    <div className={bgClass}>
      <Image
        src={src}
        className={cn(className, " absolute -z-10")}
        fill
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default BgImg;

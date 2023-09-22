import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface BgImgProps extends ImageProps {
  bgClass?: string;
  children?: React.ReactNode;
}

const BgImg: FC<BgImgProps> = ({
  bgClass,
  src,
  className,
  alt,
  children,
  ...props
}) => {
  return (
    <div className={bgClass}>
      <Image
        src={src}
        className={cn(className, " absolute -z-10")}
        fill
        alt={alt}
        {...props}
      />
      {children}
    </div>
  );
};

export default BgImg;

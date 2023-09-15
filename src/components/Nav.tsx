import { FaApple, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="w-screen text-primary sticky top-0 bg-mildWhite z-30">
      <div className="bg-[#E8E8E8]">
        <div className="font-sans w-11/12 flex p-2 tracking-wider mx-auto items-center justify-between">
          <div className="flex gap-8 text-sm">
            <h1>FREE CALL : (+1)-96-716-6879</h1>
            <h1>EMAIL : CONTACT@SITE.COM</h1>
          </div>
          <div className="flex gap-4 text-xl cursor-pointer">
            <FaApple />
            <FaGoogle />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-11/12 mx-auto py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="w-14 h-8 rounded-[3rem] border-primary border-[7px]"></div>
          <h1 className="tracking-[0.2rem] font-bold text-xl">COVINGTON</h1>
        </div>
        <div className="flex flex-col justify-between h-[0.8rem] items-end cursor-pointer">
          <div className="border-2 w-8 border-primary"></div>
          <div className="border-2 w-12 border-primary"></div>
        </div>
      </div>
    </div>
  );
}

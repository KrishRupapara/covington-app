import { FaApple, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="w-screen px-1 border-red-950 text-primary sticky top-0 z-30 bg-[#E8E8E8]">
      <div>
        {/* <div className="font-sans w-11/12 flex flex-col md:flex-row gap-4 py-2 tracking-wider mx-auto items-center justify-between">
          <div className="flex gap-8 text-sm">
            <h1>
              FREE CALL :{" "}
              <span className="block md:inline">(+1)-96-716-6879</span>
            </h1>
            <h1>
              EMAIL : <span className="block md:inline"> CONTACT@SITE.COM</span>
            </h1>
          </div>
          <div className="flex items-center gap-4 text-xl cursor-pointer">
            <FaApple className="hover:opacity-70 transition-all" />
            <FaGoogle className="hover:opacity-70 transition-all" />
            <FaLinkedinIn className="hover:opacity-70 transition-all" />
            <FaTwitter className="hover:opacity-70 transition-all" />
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-between w-11/12 mx-auto py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="w-14 h-8 rounded-[3rem] border-primary border-[7px]"></div>
          <h1 className="tracking-[0.2rem] font-bold text-xl hidden md:block">
            COVINGTON
          </h1>
        </div>
        <div className="flex flex-col justify-between h-[0.8rem] items-end cursor-pointer">
          <div className="border-2 w-8 border-primary"></div>
          <div className="border-2 w-12 border-primary"></div>
        </div>
      </div>
    </nav>
  );
}

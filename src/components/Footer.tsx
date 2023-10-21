export default function Footer() {
  return (
    <div className="w-screen h-96 bg-[#E8E8E8]">
      <div className="w-4/5 mx-auto h-5/6 flex items-center justify-center flex-col text-center gap-4">
        <div className="flex gap-3 items-center">
          <div className="w-14 h-8 rounded-[3rem] border-primary border-[7px]"></div>
          <h1 className="tracking-[0.2rem] font-bold text-xl">COVINGTON</h1>
        </div>
        <div className="font-sans tracking-wide flex flex-col items-center gap-4 text-lg text-lightGray">
          <p className="px-10">
            Continal is a clean PSD theme suitable for corporate, construction.
            You can customize it very easy to fit your needs, semper suscipit
            metus accumsan at. Vestibulum et lacus urna.
          </p>
          <div className="flex items-center gap-10">
            <p>(+1) 96 716 6079</p>
            <p>(+1) 96 716 6079</p>
          </div>
        </div>
      </div>
      <footer className="w-screen bg-lightGray h-1/6 flex items-center justify-center text-mildWhite font-sans tracking-widen text-lg">
        Copyright © 2023. All rights reserved.
      </footer>
    </div>
  );
}

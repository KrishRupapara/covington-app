import { FC } from "react";
import Image from "next/image";

interface NavComponentProps {}

const NavComponent: FC<NavComponentProps> = ({}) => {
  return (
    <div>
      <div>
        <ul>
          <li>HOME</li>
          <li>PROJECT</li>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>PAGES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="grid grid-rows-2 grid-cols-2"></div>
    </div>
  );
};

export default NavComponent;

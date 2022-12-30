import React from "react";
import LOGO from "../assets/cmc-logo-outline.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between pt-[3.875rem] px-[8.81rem]">
      <div>
        <img src={LOGO} alt="LOGO" />
      </div>
      <div className="flex">
        <ul className="flex gap-[3.63rem] items-center text-justWhite">
          <li className="hover:cursor-pointer">HOME</li>
          <li className="hover:cursor-pointer">MEMBERSHIP</li>
          <li className="hover:cursor-pointer">CLUB MINT</li>
          <li className="hover:cursor-pointer">SHARKS MINT</li>
          <li className="hover:cursor-pointer">FIAT VISA</li>
          <li className="hover:cursor-pointer">CONTACT US</li>
          <li className="hover:cursor-pointer">DEPOSIT FUNDS</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

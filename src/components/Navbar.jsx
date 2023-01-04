import React from "react";
// import LOGO from "../assets/cmc-logo-outline.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between pt-[3.875rem] px-[8.81rem]">
      <div className="flex">
        <ul className="flex gap-8 items-center text-justWhite font-inter text-base font-normal">
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            HOME
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            MEMBERSHIP
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            CLUB MINT
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            SHARKS MINT
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            FIAT VISA
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            CONTACT US
          </li>
          {/* <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            DEPOSIT FUNDS
          </li> */}
        </ul>
      </div>
      <div>
        {/* <img src={LOGO} alt="LOGO" /> */}
        <button className="text-white font-spacegrotesk font-bold text-base bg-gold py-[13px] px-[25px] rounded-[20px] border-[1px] border-gold radial-btn">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default Navbar;

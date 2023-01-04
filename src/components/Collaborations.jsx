import React from "react";
import CASH_CATS from "../assets/cash_cats_logo.png";
import PTX from "../assets/ptx_logo.png";

const Collaborations = () => {
  return (
    <div className="px-[8.81rem] mb-[10.19rem]">
      <p className="text-justWhite font-bold text-8xl text-center mb-[3.56rem] font-spacegrotesk">
        <span className="text-gold">Collab</span>orations
      </p>
      <div className="flex gap-4">
        <div className="w-[219px] rounded-t-[10px] bg-footerColor group">
          <div className=" h-[244px] flex items-center">
            <img
              src={PTX}
              alt="PTX"
              className="saturate-0 group-hover:saturate-100 object-contain mx-auto px-6"
            />
          </div>
          <div className="bg-darkTexts group-hover:bg-gold rounded-t-[10px]">
            <p
              className="text-center text-footerColor font-spacegrotesk font-bold text-[2rem]
              group-hover:text-justWhite"
            >
              PROTOCOL X
            </p>
          </div>
        </div>

        <div className="w-[219px] rounded-t-[10px] bg-footerColor group">
          <div className=" h-[244px] flex items-center">
            <img
              src={CASH_CATS}
              alt="CASH_CATS"
              className="saturate-0 group-hover:saturate-100 object-contain mx-auto"
            />
          </div>
          <div className="bg-darkTexts group-hover:bg-gold rounded-t-[10px]">
            <p
              className="text-center text-footerColor font-spacegrotesk font-bold text-[2rem]
              group-hover:text-justWhite"
            >
              CASH CATS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;

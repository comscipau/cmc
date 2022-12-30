import React from "react";
import SILVER_CARD from "../assets/SILVER_CARD.png";
import GOLD_CARD from "../assets/GOLD_CARD.png";
import DIAMOND_CARD from "../assets/DIAMOND_CARD.png";
import BLACK_CARD from "../assets/BLACK_CARD.png";
import APEX_CARD from "../assets/APEX_CARD.png";

const Membership = () => {
  return (
    <div className="w-full pt-12 px-[8.81rem] bg-gradient_bg bg-cover">
      <p className="font-spacegrotesk font-medium text-[4rem] text-white leading-none text-center">
        MINT OUR EXCLUSIVE
        <br />
        <span className="text-gold">CLUB MEMBERSHIP CARDS NFT</span>
      </p>
      <p className="font-inter text-base leading-8 text-justWhite text-center mt-8 pb-[7.81rem]">
        Each of the tiers of memberships has the following benefits: <br />
        Access to dedicated community channels by tier, community games and
        activities. Access to affiliate network discounts and brands.
        <br /> Monthly airdrop of passive rewards from web3 and affiliated
        partnerships, Super cool NFT that can be traded or sold on the open
        market.
      </p>

      <div className="flex justify-between relative mb-[4rem]">
        <div className="text-justWhite">
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#D7D7D7]">SILVER</span> CARD
            </p>
            <div className="w-[470px] border-t border-white ml-4 absolute left-[21rem]" />
          </div>
          <p className="italic font-inter text-base pt-2 font-light">
            Supply: 1,000
            <br />
            Price: FREE
            <br />
            Utility: Access to free roll Poker tournaments
          </p>
        </div>
        <div className="absolute right-0 z-[10]">
          <img src={SILVER_CARD} alt="SILVER_CARD" />
        </div>
      </div>

      <div className="flex justify-between relative mb-[4rem]">
        <div className="text-justWhite">
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#FDBA5D]">GOLD</span> CARD
            </p>
            <div className="w-[450px] border-t border-white ml-4 absolute left-[19rem]" />
          </div>
          <p className="italic font-inter text-base pt-2 font-light">
            Supply: 5,000 <br />
            Price: $160.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst Gold card members, and Discounts on NFT Mints.
          </p>
        </div>
        <div className="absolute -top-8 right-0 z-[9]">
          <img src={GOLD_CARD} alt="GOLD_CARD" />
        </div>
      </div>

      <div className="flex justify-between relative mb-[4rem]">
        <div className="text-justWhite">
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#1A569A]">DIAMOND</span> CARD
            </p>
            <div className="w-[300px] border-t border-white ml-4 absolute left-[25.5rem]" />
          </div>
          <p className="italic font-inter text-base pt-2 font-light">
            Supply: 500 <br />
            Price: $800.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst Diamond card members, and Discounts on NFT Mints.
          </p>
        </div>
        <div className="absolute right-0 -top-[5.5rem] z-[8]">
          <img src={DIAMOND_CARD} alt="DIAMOND_CARD" />
        </div>
      </div>

      <div className="flex justify-between relative mb-[4rem]">
        <div className="text-justWhite">
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#505050]">BLACK</span> CARD
            </p>
            <div className="w-[430px] border-t border-white ml-4 absolute left-[21rem]" />
          </div>
          <p className="italic font-inter text-base pt-2 font-light">
            Supply: 100
            <br />
            Price: $2,000.00 <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br /> split amongst Black card members. and Discounts on NFT Mints.
          </p>
        </div>
        <div className="absolute right-0 -top-[9rem] z-[7]">
          <img src={BLACK_CARD} alt="BLACK_CARD" />
        </div>
      </div>

      <div className="flex justify-between relative">
        <div className="text-justWhite">
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#7D4BB9]">APEX</span> CARD
            </p>
            <div className="w-[500px] border-t border-white ml-4 absolute left-[19rem]" />
          </div>
          <p className="italic font-inter text-base pt-2 font-light">
            Supply: 5,000 <br />
            Price: $160.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst gold card members. Discounts on NFT Mints.
          </p>
        </div>
        <div className="absolute right-0 -top-[12.5rem] z-[6]">
          <img src={APEX_CARD} alt="APEX_CARD" />
        </div>
      </div>

      <p className="text-justWhite font-spacegrotesk font-medium text-[3.5rem] text-center mt-[4.63rem]">
        WHY MINT?
      </p>
      <div className="flex justify-around items-center pb-8 mt-9">
        <p className="font-inter font-light text-base text-gold">
          Exclusive members only games
        </p>
        <div className="border-r border-white h-9" />
        <p className="font-inter font-light text-base text-gold">
          Dedicated Community Channels
        </p>
        <div className="border-r border-white h-9" />
        <p className="font-inter font-light text-base text-gold">
          Monthly rewards by tier
        </p>
        <div className="border-r border-white h-9" />
        <p className="font-inter font-light text-base text-gold">
          Casino commissions and rakebacks
        </p>
      </div>
    </div>
  );
};

export default Membership;

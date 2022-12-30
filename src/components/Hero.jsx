import React from "react";

const Hero = () => {
  return (
    <div className="px-[8.81rem] pt-[10.81rem] -mt-12 bg-hero_bg bg-cover bg-top">
      <p className="font-spacegrotesk text-4xl pb-[17px]">
        <span className="text-gold font-normal">Club</span>
        <span className="text-justWhite font-medium">MonteCarlo</span>
      </p>
      <p className="font-spacegrotesk text-gold font-medium text-[4rem] leading-none">
        WHERE WINNERS
        <br /> COME TO PLAY.
      </p>
      <p className="w-[35.69rem] text-justWhite font-inter leading-8 pt-[17px]">
        We are an online community dedicated to the education & support of their
        NFT holders around the world, in the exciting areas of NFTs, Travel &
        Casino Life. Access to the discord, education, poker tournaments and a
        great community, FREE OF CHARGE!
      </p>
      <div className="grid grid-cols-3 gap-[4.69rem] py-[10.31rem] items-center">
        <div className="flex flex-col items-center">
          <p className="font-spacegrotesk text-gold text-[4rem] font-bold">
            1,000+
          </p>
          <p className="font-inter text-justWhite text-2xl font-normal">
            Poker tournaments played
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-spacegrotesk text-gold text-[4rem] font-bold">
            $10,000+
          </p>
          <p className="font-inter text-justWhite text-2xl font-normal">
            Distributed Shares
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-spacegrotesk text-gold text-[4rem] font-bold">
            1,031+
          </p>
          <p className="font-inter text-justWhite text-2xl font-normal">
            Members and growing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import FOOTER_LOGO from "../assets/logosmall.png";

const Footer = () => {
  return (
    <div className="px-[8.81rem] pt-[6.5rem] bg-gradient_footer bg-cover bg-right-bottom">
      <div className="flex justify-between pb-4 border-b-2 border-footerColor">
        <p className="font-spacegrotesk font-normal text-2xl">
          <span className="text-gold">Club</span>
          <span className="text-justWhite">MonteCarlo</span>
        </p>
        <img src={FOOTER_LOGO} alt="FOOTER_LOGO" className="object-contain" />
      </div>

      <div className="flex justify-end mt-[3.5rem]">
        <div className="flex flex-col text-justWhite text-right mr-[4.81rem]">
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            COMPANY
          </p>
          <a href="#" className="pb-3 font-inter text-xs">
            About Us
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Collabs
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Announcements
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Keep in touch
          </a>
        </div>

        <div className="flex flex-col text-justWhite text-right mr-[10.63rem]">
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            PRODUCTS
          </p>
          <a href="#" className="pb-3 font-inter text-xs">
            Gold Membership Card
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Club Membership Card NFT
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Club Sharks NFT
          </a>
        </div>

        <div className="flex flex-col text-justWhite text-right mr-[8.94rem]">
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            SOCIALS
          </p>
          <a href="#" className="pb-3 font-inter text-xs">
            Twitter
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Discord
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Telegram
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Youtube
          </a>
        </div>

        <div className="flex flex-col text-justWhite text-right">
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            SUPPORT
          </p>
          <a href="#" className="pb-3 font-inter text-xs">
            Disclaimer
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Privacy Policy
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Medium Articles
          </a>
          <a href="#" className="pb-3 font-inter text-xs">
            Whitepaper
          </a>
        </div>
      </div>

      <div className="mt-[2.875rem] flex justify-end relative">
        <div className="border-t-2 border-footerColor w-[82%] absolute top-6 left-0" />
        <button className="text-white font-spacegrotesk font-bold text-base bg-gold py-[13px] px-[25px] rounded-[20px] border-[1px] border-gold radial-btn">
          Let's Collaborate
        </button>
      </div>
      <p className="text-white font-spacegrotesk font-light text-base pb-[4.44rem] -mt-4">
        Copyright 2023 ClubMonteCarlo | All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

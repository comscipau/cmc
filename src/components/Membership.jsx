import React from "react";
import SILVER_CARD from "../assets/SILVER_CARD.png";
import GOLD_CARD from "../assets/GOLD_CARD.png";
import DIAMOND_CARD from "../assets/DIAMOND_CARD.png";
import BLACK_CARD from "../assets/BLACK_CARD.png";
import APEX_CARD from "../assets/APEX_CARD.png";
import { motion } from "framer-motion";

const Membership = () => {
  const mainContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        // staggerChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const fadeInToUp = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const fadeToRight = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full lg:pt-12 px-6 lg:px-[8.81rem] bg-gradient_bg_mobile lg:bg-gradient_bg bg-cover md:bg-top">
      <motion.div
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="font-spacegrotesk font-medium text-2xl lg:text-[4rem] text-white leading-none text-center mb-2 lg:mb-0"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          MINT OUR EXCLUSIVE
        </motion.p>
        {/* <br /> */}
        <motion.p
          className="font-spacegrotesk font-medium text-[2rem] lg:text-[4rem] text-gold leading-none text-center"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CLUB MEMBERSHIP CARDS NFT
        </motion.p>

        <motion.p
          className="font-inter text-base font-normal leading-8 text-justWhite text-center mt-8 pb-[7.81rem] hidden lg:block"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Each of the tiers of memberships has the following benefits:
          <br />
          • Access to dedicated community channels by tier • Community games and
          activities • Access to affiliate network discounts and brands
          <br /> • Monthly airdrop of passive rewards from web3 and affiliated
          partnerships • Super cool NFT that can be traded or sold on the open
          market
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-between relative mb-10 lg:mb-6 z-[10] mt-[3.9375rem] lg:mt-0"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="font-spacegrotesk font-medium text-[3.5rem] hidden lg:block">
              <span className="text-[#D7D7D7]">SILVER</span> CARD
            </p>
            <p className="font-spacegrotesk font-medium text-[3rem] block lg:hidden">
              <span className="text-[#D7D7D7]">SILVER</span> CARD
            </p>

            {/* <svg className="w-1/2 h-1 ml-4 absolute left-[21rem]">
              <polyline
                className="stroke-2 stroke-white fill-none"
                points="0,0 350,0"
              ></polyline>
            </svg> */}
          </div>
          <p className="py-2 text-base italic font-light text-center font-inter lg:text-left">
            Supply: 1,000
            <br />
            Price: FREE
            <br />
            Utility: Access to free roll Poker tournaments
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/"
              className="text-base italic font-medium leading-8 underline font-inter"
            >
              Mint Silver Card NFT
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-[470px] border-t border-white ml-4 mt-10 absolute left-[21rem] hidden lg:block"
          variants={fadeToRight}
        />
        <motion.div
          className="lg:absolute lg:right-0 md:mx-auto"
          variants={fadeInToUp}
        >
          <img src={SILVER_CARD} alt="SILVER_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-between relative mb-10 lg:mb-6 z-[9]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="font-spacegrotesk font-medium text-[3.5rem] hidden lg:block">
              <span className="text-[#FDBA5D]">GOLD</span> CARD
            </p>
            <p className="font-spacegrotesk font-medium text-[3rem] block lg:hidden">
              <span className="text-[#FDBA5D]">GOLD</span> CARD
            </p>
          </div>
          <p className="py-2 text-base italic font-light text-center font-inter lg:text-left">
            Supply: 5,000 <br />
            Price: $160.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst Gold card members, and Discounts on NFT Mints.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/"
              className="text-base italic font-medium leading-8 underline font-inter"
            >
              Mint Gold Card NFT
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-[450px] border-t border-white ml-4 mt-10 absolute left-[19rem] hidden lg:block"
          variants={fadeToRight}
        />
        <motion.div
          className="lg:absolute lg:-top-8 lg:right-0 md:mx-auto"
          variants={fadeInToUp}
        >
          <img src={GOLD_CARD} alt="GOLD_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-between relative mb-10 lg:mb-6 z-[8]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="font-spacegrotesk font-medium text-[3.5rem] hidden lg:block">
              <span className="text-[#1A569A]">DIAMOND</span> CARD
            </p>
            <p className="font-spacegrotesk font-medium text-[2.625rem] block lg:hidden">
              <span className="text-[#1A569A]">DIAMOND</span> CARD
            </p>
          </div>
          <p className="py-2 text-base italic font-light text-center font-inter lg:text-left">
            Supply: 500 <br />
            Price: $800.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst Diamond card members, and Discounts on NFT Mints.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/"
              className="text-base italic font-medium leading-8 underline font-inter"
            >
              Mint Diamond Card NFT
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-[300px] border-t border-white ml-4 mt-10 absolute left-[25.5rem] hidden lg:block"
          variants={fadeToRight}
        />
        <motion.div
          className="lg:absolute lg:right-0 lg:-top-[5.5rem] md:mx-auto"
          variants={fadeInToUp}
        >
          <img src={DIAMOND_CARD} alt="DIAMOND_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-between relative mb-10 lg:mb-6 z-[7]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="font-spacegrotesk font-medium text-[3.5rem] hidden lg:block">
              <span className="text-[#505050]">BLACK</span> CARD
            </p>
            <p className="font-spacegrotesk font-medium text-[3rem] block lg:hidden">
              <span className="text-[#505050]">BLACK</span> CARD
            </p>
          </div>
          <p className="py-2 text-base italic font-light text-center font-inter lg:text-left">
            Supply: 100
            <br />
            Price: $2,000.00 <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br /> split amongst Black card members. and Discounts on NFT Mints.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/"
              className="text-base italic font-medium leading-8 underline font-inter"
            >
              Mint Black Card NFT
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-[430px] border-t border-white ml-4 mt-10 absolute left-[21rem] hidden lg:block"
          variants={fadeToRight}
        />
        <motion.div
          className="lg:absolute lg:right-0 lg:-top-[9rem] md:mx-auto"
          variants={fadeInToUp}
        >
          <img src={BLACK_CARD} alt="BLACK_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex flex-col-reverse lg:flex-row justify-between z-[6]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="font-spacegrotesk font-medium text-[3.5rem] hidden lg:block">
              <span className="text-[#7D4BB9]">APEX</span> CARD
            </p>
            <p className="font-spacegrotesk font-medium text-[3rem] block lg:hidden">
              <span className="text-[#7D4BB9]">APEX</span> CARD
            </p>
          </div>
          <p className="py-2 text-base italic font-light text-center font-inter lg:text-left">
            Supply: 20 <br />
            Price: $5,000.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst apex card members. Discounts on NFT Mints.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/"
              className="text-base italic font-medium leading-8 underline font-inter"
            >
              Mint Apex Card NFT
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-[500px] border-t border-white ml-4 mt-10 absolute left-[19rem] hidden lg:block"
          variants={fadeToRight}
        />
        <motion.div
          className="lg:absolute lg:right-0 lg:-top-[12.5rem] md:mx-auto"
          variants={fadeInToUp}
        >
          <img src={APEX_CARD} alt="APEX_CARD" />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-justWhite font-spacegrotesk font-medium text-[3.5rem] text-center mt-20 lg:mt-[4.63rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        WHY MINT?
      </motion.p>
      <motion.div
        className="flex flex-col lg:flex-row justify-around items-center lg:pb-[12.5rem] mt-9"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-lg font-light lg:text-base font-inter text-gold"
          variants={fadeInToUp}
        >
          Exclusive members only games
        </motion.p>
        <motion.div
          className="border-r-[3px] border-white h-9 hidden lg:block"
          variants={fadeInToUp}
        />
        <motion.div
          className="block w-10 my-10 border-b-4 border-white rounded-full lg:hidden"
          variants={fadeInToUp}
        />
        <motion.p
          className="text-base font-light font-inter text-gold"
          variants={fadeInToUp}
        >
          Dedicated Community Channels
        </motion.p>
        <motion.div
          className="border-r-[3px] border-white h-9 hidden lg:block"
          variants={fadeInToUp}
        />
        <motion.div
          className="block w-10 my-10 border-b-4 border-white rounded-full lg:hidden"
          variants={fadeInToUp}
        />
        <motion.p
          className="text-base font-light font-inter text-gold"
          variants={fadeInToUp}
        >
          Monthly rewards by tier
        </motion.p>
        <motion.div
          className="border-r-[3px] border-white h-9 hidden lg:block"
          variants={fadeInToUp}
        />
        <motion.div
          className="block w-10 my-10 border-b-4 border-white rounded-full lg:hidden"
          variants={fadeInToUp}
        />
        <motion.p
          className="text-base font-light font-inter text-gold"
          variants={fadeInToUp}
        >
          Casino commissions and rakebacks
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Membership;

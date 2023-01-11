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
        staggerChildren: 1,
      },
    },
  };

  const whyMintContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const cardsContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
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
      },
    },
  };

  const fadeInToUpDelay = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
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
      },
    },
  };

  return (
    <div className="w-full pt-12 px-[8.81rem] bg-gradient_bg bg-cover">
      <motion.div
        variants={cardsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="font-spacegrotesk font-medium text-[4rem] text-white leading-none text-center"
          variants={fadeInToUp}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          MINT OUR EXCLUSIVE
        </motion.p>
        {/* <br /> */}
        <motion.p
          className="font-spacegrotesk font-medium text-[4rem] text-gold leading-none text-center"
          variants={fadeInToUp}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          CLUB MEMBERSHIP CARDS NFT
        </motion.p>

        <motion.p
          className="font-inter text-base leading-8 text-justWhite text-center mt-8 pb-[7.81rem]"
          variants={fadeInToUp}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          Each of the tiers of memberships has the following benefits: <br />
          Access to dedicated community channels by tier, community games and
          activities. Access to affiliate network discounts and brands.
          <br /> Monthly airdrop of passive rewards from web3 and affiliated
          partnerships, Super cool NFT that can be traded or sold on the open
          market.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-between relative mb-[4rem] z-[10]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#D7D7D7]">SILVER</span> CARD
            </p>

            {/* <svg className="w-1/2 h-1 ml-4 absolute left-[21rem]">
              <polyline
                className="stroke-white stroke-2 fill-none"
                points="0,0 350,0"
              ></polyline>
            </svg> */}
          </div>
          <p className="pt-2 text-base italic font-light font-inter">
            Supply: 1,000
            <br />
            Price: FREE
            <br />
            Utility: Access to free roll Poker tournaments
          </p>
        </motion.div>
        <motion.div
          className="w-[470px] border-t border-white ml-4 mt-10 absolute left-[21rem]"
          variants={fadeToRight}
        />
        <motion.div className="absolute right-0" variants={fadeInToUp}>
          <img src={SILVER_CARD} alt="SILVER_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-between relative mb-[4rem] z-[9]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#FDBA5D]">GOLD</span> CARD
            </p>
          </div>
          <p className="pt-2 text-base italic font-light font-inter">
            Supply: 5,000 <br />
            Price: $160.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst Gold card members, and Discounts on NFT Mints.
          </p>
        </motion.div>
        <motion.div
          className="w-[450px] border-t border-white ml-4 mt-10 absolute left-[19rem]"
          variants={fadeToRight}
        />
        <motion.div className="absolute -top-8 right-0" variants={fadeInToUp}>
          <img src={GOLD_CARD} alt="GOLD_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-between relative mb-[4rem] z-[8]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#1A569A]">DIAMOND</span> CARD
            </p>
          </div>
          <p className="pt-2 text-base italic font-light font-inter">
            Supply: 500 <br />
            Price: $800.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst Diamond card members, and Discounts on NFT Mints.
          </p>
        </motion.div>
        <motion.div
          className="w-[300px] border-t border-white ml-4 mt-10 absolute left-[25.5rem]"
          variants={fadeToRight}
        />
        <motion.div
          className="absolute right-0 -top-[5.5rem]"
          variants={fadeInToUp}
        >
          <img src={DIAMOND_CARD} alt="DIAMOND_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-between relative mb-[4rem] z-[7]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#505050]">BLACK</span> CARD
            </p>
          </div>
          <p className="pt-2 text-base italic font-light font-inter">
            Supply: 100
            <br />
            Price: $2,000.00 <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br /> split amongst Black card members. and Discounts on NFT Mints.
          </p>
        </motion.div>
        <motion.div
          className="w-[430px] border-t border-white ml-4 mt-10 absolute left-[21rem]"
          variants={fadeToRight}
        />
        <motion.div
          className="absolute right-0 -top-[9rem]"
          variants={fadeInToUp}
        >
          <img src={BLACK_CARD} alt="BLACK_CARD" />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex justify-between z-[6]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-justWhite" variants={fadeToRight}>
          <div className="flex items-center">
            <p className="font-spacegrotesk font-medium text-[3.5rem]">
              <span className="text-[#7D4BB9]">APEX</span> CARD
            </p>
          </div>
          <p className="pt-2 text-base italic font-light font-inter">
            Supply: 5,000 <br />
            Price: $160.00
            <br />
            Utility: Access to free roll Poker tournaments, 25% of House’s
            profit
            <br />
            split amongst gold card members. Discounts on NFT Mints.
          </p>
        </motion.div>
        <motion.div
          className="w-[500px] border-t border-white ml-4 mt-10 absolute left-[19rem]"
          variants={fadeToRight}
        />
        <motion.div
          className="absolute right-0 -top-[12.5rem]"
          variants={fadeInToUp}
        >
          <img src={APEX_CARD} alt="APEX_CARD" />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-justWhite font-spacegrotesk font-medium text-[3.5rem] text-center mt-[4.63rem]"
        variants={fadeInToUpDelay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        WHY MINT?
      </motion.p>
      <motion.div
        className="flex justify-around items-center pb-[12.5rem] mt-9"
        variants={whyMintContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-base font-light font-inter text-gold"
          variants={fadeInToUp}
        >
          Exclusive members only games
        </motion.p>
        <motion.div
          className="border-r border-white h-9"
          variants={fadeInToUp}
        />
        <motion.p
          className="text-base font-light font-inter text-gold"
          variants={fadeInToUp}
        >
          Dedicated Community Channels
        </motion.p>
        <motion.div
          className="border-r border-white h-9"
          variants={fadeInToUp}
        />
        <motion.p
          className="text-base font-light font-inter text-gold"
          variants={fadeInToUp}
        >
          Monthly rewards by tier
        </motion.p>
        <motion.div
          className="border-r border-white h-9"
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

import React from "react";
import CASH_CATS from "../assets/cash_cats_logo.png";
import PTX from "../assets/ptx_logo.png";
import { motion } from "framer-motion";

const Collaborations = () => {
  const mainContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
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

  return (
    <div className="px-[8.81rem] mb-[10.19rem]">
      <motion.p
        className="text-justWhite font-bold text-8xl text-center mb-[3.56rem] font-spacegrotesk"
        variants={fadeInToUpDelay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-gold">Collab</span>orations
      </motion.p>
      <motion.div
        className="flex gap-4"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-[219px] rounded-t-[10px] bg-footerColor group"
          variants={fadeInToUp}
        >
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
        </motion.div>

        <motion.div
          className="w-[219px] rounded-t-[10px] bg-footerColor group"
          variants={fadeInToUp}
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Collaborations;

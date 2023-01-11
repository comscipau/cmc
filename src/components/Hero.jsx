import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const defaultContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
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

  const fadeInToUp = {
    hidden: {
      y: 50,
      opacity: 0,
      zIndex: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      zIndex: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="px-[8.81rem] pt-[10.81rem] -mt-12 bg-hero_bg bg-cover bg-top z-[2] relative"
      variants={heroContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        className="font-spacegrotesk text-4xl pb-[17px]"
        variants={fadeToRight}
      >
        <span className="font-normal text-gold">Club</span>
        <span className="font-medium text-justWhite">MonteCarlo</span>
      </motion.p>
      <motion.p
        className="font-spacegrotesk text-gold font-medium text-[4rem] leading-none"
        variants={fadeToRight}
      >
        WHERE WINNERS
        <br /> COME TO PLAY.
      </motion.p>
      <motion.p
        className="w-[35.69rem] text-justWhite font-inter leading-8 pt-[17px]"
        variants={fadeToRight}
      >
        We are an online community dedicated to the education & support of their
        NFT holders around the world, in the exciting areas of NFTs, Travel &
        Casino Life. Access to the discord, education, poker tournaments and a
        great community, FREE OF CHARGE!
      </motion.p>
      <motion.div
        className="grid grid-cols-3 gap-[4.69rem] pb-[10.31rem] mt-[11.5rem] items-center"
        variants={defaultContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInToUp}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          <p className="font-spacegrotesk text-gold text-[4rem] font-bold">
            1,000+
          </p>
          <p className="text-2xl font-normal font-inter text-justWhite">
            Poker tournaments played
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInToUp}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          <p className="font-spacegrotesk text-gold text-[4rem] font-bold">
            $10,000+
          </p>
          <p className="text-2xl font-normal font-inter text-justWhite">
            Distributed Shares
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInToUp}
        >
          <p className="font-spacegrotesk text-gold text-[4rem] font-bold">
            1,031+
          </p>
          <p className="text-2xl font-normal font-inter text-justWhite">
            Members and growing
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

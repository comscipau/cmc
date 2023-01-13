import React from "react";
import FOOTER_LOGO from "../assets/logosmall.png";
import { motion } from "framer-motion";

const Footer = () => {
  const footerContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const mainContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const linksContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
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

  const fadeToLeft = {
    hidden: {
      x: 100,
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
    <motion.div
      className="px-[8.81rem] pt-[6.5rem] bg-gradient_footer bg-cover bg-right-bottom"
      variants={mainContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-between pb-4 border-b-2 border-footerColor"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="font-spacegrotesk font-normal text-2xl"
          variants={fadeToRight}
        >
          <span className="text-gold">Club</span>
          <span className="text-justWhite">MonteCarlo</span>
        </motion.p>
        <motion.img
          src={FOOTER_LOGO}
          alt="FOOTER_LOGO"
          className="object-contain"
          variants={fadeToLeft}
        />
      </motion.div>

      <motion.div
        className="flex justify-end mt-[3.5rem]"
        variants={linksContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col text-justWhite text-right mr-[4.81rem]"
          variants={fadeInToUp}
        >
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            COMPANY
          </p>
          <a href="/" className="pb-3 font-inter text-xs">
            About Us
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Collabs
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Announcements
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Keep in touch
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col text-justWhite text-right mr-[10.63rem]"
          variants={fadeInToUp}
        >
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            PRODUCTS
          </p>
          <a href="/" className="pb-3 font-inter text-xs">
            Gold Membership Card
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Club Membership Card NFT
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Club Sharks NFT
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col text-justWhite text-right mr-[8.94rem]"
          variants={fadeInToUp}
        >
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            SOCIALS
          </p>
          <a href="/" className="pb-3 font-inter text-xs">
            Twitter
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Discord
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Telegram
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Youtube
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col text-justWhite text-right"
          variants={fadeInToUp}
        >
          <p className="pb-[2.625rem] font-spacegrotesk text-base font-medium">
            SUPPORT
          </p>
          <a href="/" className="pb-3 font-inter text-xs">
            Disclaimer
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Privacy Policy
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Medium Articles
          </a>
          <a href="/" className="pb-3 font-inter text-xs">
            Whitepaper
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="mt-[2.875rem] flex justify-end relative"
          variants={fadeToLeft}
        >
          <div className="border-t-2 border-footerColor w-[82%] absolute top-6 left-0" />
          <button className="text-white font-spacegrotesk font-bold text-base bg-gold py-[13px] px-[25px] rounded-[20px] border-[1px] border-gold radial-btn">
            Let's Collaborate
          </button>
        </motion.div>
        <motion.p
          className="text-white font-spacegrotesk font-light text-base pb-[4.44rem] -mt-4"
          variants={fadeToRight}
        >
          Copyright 2023 ClubMonteCarlo | All Rights Reserved.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

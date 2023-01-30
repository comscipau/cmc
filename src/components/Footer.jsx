import React from "react";
import FOOTER_LOGO from "../assets/logosmall.png";
import { motion } from "framer-motion";

const Footer = () => {
  const mainContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        ease: "easeInOut",
        // staggerChildren: 1,
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
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="lg:px-[8.81rem] lg:pt-[6.5rem] bg-gradient_footer_mobile bg-bottom pt-[10.75rem] lg:bg-gradient_footer bg-cover lg:bg-right-bottom"
      variants={mainContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-between px-6 pb-4 border-b-2 lg:px-0 border-footerColor"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-2xl font-normal font-spacegrotesk"
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
        className="px-6 lg:px-0 flex justify-between lg:justify-end mt-[2.875rem] lg:mt-[3.5rem]"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col text-justWhite text-left lg:text-right mr-4 lg:mr-[4.81rem]"
          variants={fadeInToUp}
        >
          <p className="pb-4 lg:pb-[2.625rem] font-spacegrotesk text-xs lg:text-base font-medium">
            COMPANY
          </p>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            About Us
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Collabs
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Announcements
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Keep in touch
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col text-justWhite text-left lg:text-right mr-4 lg:mr-[10.63rem]"
          variants={fadeInToUp}
        >
          <p className="pb-4 lg:pb-[2.625rem] font-spacegrotesk text-xs lg:text-base font-medium">
            PRODUCTS
          </p>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Club Passes
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Club Sharks NFT
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col text-justWhite text-left lg:text-right mr-4 lg:mr-[8.94rem]"
          variants={fadeInToUp}
        >
          <p className="pb-4 lg:pb-[2.625rem] font-spacegrotesk text-xs lg:text-base font-medium">
            SOCIALS
          </p>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Twitter
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Discord
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Telegram
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Youtube
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col text-left text-justWhite lg:text-right"
          variants={fadeInToUp}
        >
          <p className="pb-4 lg:pb-[2.625rem] font-spacegrotesk text-xs lg:text-base font-medium">
            SUPPORT
          </p>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Disclaimer
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Medium Articles
          </a>
          <a
            href="/"
            className="pb-5 lg:pb-3 font-inter text-[0.5rem] lg:text-xs"
          >
            Whitepaper
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="mt-[3.375rem] lg:mt-[2.875rem] flex justify-center lg:justify-end relative"
          variants={fadeToLeft}
        >
          <div className="border-t-2 border-footerColor w-[82%] absolute top-6 left-0 hidden lg:block" />
          <button className="text-white font-spacegrotesk font-bold text-base bg-gold py-[13px] px-[25px] rounded-[20px] border-[1px] border-gold radial-btn">
            Let's Collaborate
          </button>
        </motion.div>
        <div className="block w-full mt-6 mb-4 border-t-2 border-footerColor lg:hidden" />
        <motion.p
          className="text-white font-spacegrotesk font-light text-[0.5rem] lg:text-base lg:pb-[4.44rem] lg:-mt-4 text-center lg:text-left pb-4"
          variants={fadeToRight}
        >
          Copyright 2023 ClubMonteCarlo | All Rights Reserved.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

import React from "react";
// import LOGO from "../assets/cmc-logo-outline.png";
import { motion } from "framer-motion";

const Navbar = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  const mainContainer = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 1,
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
    <motion.div
      className="w-full flex justify-between pt-[3.875rem] px-[8.81rem] z-[99] relative"
      variants={mainContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="flex" variants={fadeInToUp}>
        <ul className="flex items-center gap-8 text-base font-normal text-justWhite font-inter">
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            HOME
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            MEMBERSHIP
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            CLUB MINT
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            SHARKS MINT
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            FIAT VISA
          </li>
          <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            CONTACT US
          </li>
          {/* <li className="hover:cursor-pointer hover:text-gold hover:border-b hover:border-gold">
            DEPOSIT FUNDS
          </li> */}
        </ul>
      </motion.div>
      <motion.div variants={fadeInToUp}>
        {/* <img src={LOGO} alt="LOGO" /> */}
        <button className="text-white font-spacegrotesk font-bold text-base bg-gold py-[13px] px-[25px] rounded-[20px] border-[1px] border-gold radial-btn">
          Join Our Community
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

/*
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {}
        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;



*/

import { motion } from "framer-motion";
import { CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 w-full">
      {/* Navigation */}
      {/* Your navigation can go here */}

      {/* Hero Section */}
      <div className="w-full px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Next Generation
              <span className="text-cyan-400 block">Digital Banking</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg">
              Experience the future of banking with our innovative digital solutions and secure payment systems.
            </p>
          </div>

          {/* Card Animation */}
          <div className="relative h-[400px]">
            {/* Decorative Orbs */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 w-8 h-8 rounded-full bg-cyan-400/20 backdrop-blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-cyan-400/30 backdrop-blur-sm"
            />

            {/* Credit Card */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-[350px] h-[220px] rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-800 p-6 shadow-2xl backdrop-blur-sm">
                <div className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent rounded-t-2xl" />
                <CreditCard className="text-cyan-400 mb-4" size={32} />
                <div className="text-zinc-400 space-y-4">
                  <div className="text-lg">**** **** **** 4242</div>
                  <div className="text-sm">VALID THRU 12/28</div>
                  <div className="text-sm">Abdullah Shaikh</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

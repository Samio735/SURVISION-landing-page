"use client";
import { motion } from "framer-motion";

function Background() {
  return (
    <div className="w-full h-full absolute -z-10  top-0 overflow-hidden   ">
      <div className="w-full h-full scale-[180%] absolute  bg-darkOrange  ">
        <div className="z-10 w-full h-full bg-[rgba(251,116,79,0.1)] absolute backdrop-blur-2xl"></div>
        <motion.div
          animate={{
            top: ["80%", "50%", "80%", "70%", "80%", "50%", "80%"],
            left: ["-10%", "10%", "20%", "10%", "-10%", "-20%", "-10%"],
            rotate: [10, 5, 10, 0, 10, 20, 10],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="bg-lightBlue -z-30 w-[1500px] h-60 -left-10 top-[80%] rotate-[10deg] absolute"
        ></motion.div>
        <motion.div
          animate={{
            top: ["50%", "30%", "20%", "50%", "20%", "50%", "50%"],
            left: ["70%", "80%", "60%", "40%", "70%", "70%", "70%"],
            width: [
              "250px",
              "600px",
              "450px",
              "650px",
              "250px",
              "550px",
              "250px",
            ],
            height: [
              "250px",
              "300px",
              "250px",
              "250px",
              "250px",
              "250px",
              "250px",
            ],
          }}
          transition={{ duration: 15 }}
          className="bg-lightPurple -z-20 w-[250px] h-[250px] rounded-full left-[70%] top-[50%] absolute"
        ></motion.div>
        <motion.div
          animate={{
            left: ["-10%", "-10%", "-10%", "-10%", "-10%", "-10%", "-10%"],
            top: ["40%", "20%", "40%", "40%", "60%", "40%", "40%"],
            rotate: [10, 5, 10, 0, 10, 20, 10],
          }}
          transition={{ duration: 15 }}
          className="bg-lighOrange w-[1500px] h-[30%] -left-10 rotate-[10deg] top-40 -z-40 absolute"
        ></motion.div>
        <div className="bg-darkOrange w-full h-full -z-50 absolute"></div>
      </div>
    </div>
  );
}

export default Background;

"use client";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, { useEffect } from "react";
function Progress() {
  const [value, setValue] = React.useState(0);
  //  animate the progress bar from 0 to 75
  useEffect(() => {
    setTimeout(() => {
      setValue(75);
    }, 500);
  }, []);

  return (
    <div className="lg:-mt-8">
      <CircularProgress value={value} size="120px" color="#F24606">
        <CircularProgressLabel fontSize={"1rem"}>
          {value}%
        </CircularProgressLabel>
      </CircularProgress>
    </div>
  );
}

export default Progress;

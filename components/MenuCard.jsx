/** @jsx jsx */
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import tw, { styled, css } from "twin.macro";
import { useState, useEffect } from "react";

const BackgroundImage = ({ isHovered, url }) => {
  const spring = {
    ease: "easeOut",
    duration: 0.2,
  };
  return (
    <motion.div
      css={[
        css`background-position: center;
        background-size: cover;
        background-image: url("${url}");`,
        isHovered
          ? css`
              &::before {
                background-color: rgb(240, 14, 46);
                content: "";
                display: block;
                border-radius: 12px;
                width: 100%;
                height: 100%;
                mix-blend-mode: darken;
                position: absolute;
                top: 0;
                left: 0;
              }
              &::after {
                background-color: rgb(25, 37, 80);
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 12px;
                mix-blend-mode: lighten;
                position: absolute;
                top: 0;
                left: 0;
              }
            `
          : css``,
        tw`h-56 w-full rounded-xl`,
      ]}
      transition={spring}
      animate={{
        height: isHovered ? "16rem" : "14rem",
        y: isHovered ? "0rem" : "2rem",
      }}
    ></motion.div>
  );
};

export const MenuCard = ({ title, imageUrl }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
      css={[
        css`
          flex-basis: 25%;
        `,
        tw`h-64 rounded-xl cursor-pointer flex-grow flex-shrink box-border m-3 justify-between`,
      ]}
      whileHover={{
        "flex-basis": "30%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        css={[
          tw`absolute z-10 font-bold pb-3 px-1 text-xl`,
          isHovered
            ? tw`h-64 text-white text-4xl font-black px-5 py-2`
            : tw``,
        ]}
      >
        {title}
      </motion.div>
      <BackgroundImage isHovered={isHovered} url={imageUrl} />
    </motion.div>
  );
};

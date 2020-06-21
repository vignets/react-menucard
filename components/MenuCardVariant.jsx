/** @jsx jsx */
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import tw, { styled, css } from "twin.macro";
import { useState, useEffect } from "react";
import facepaint from "facepaint";
import { useBreakpoint } from "../utils/breakpoint.js";
import { brk } from "../utils/brk.js";

const mq = facepaint(["@media(min-width: 640px)", "@media(min-width: 768px)"]);

const Wrapper = styled(motion.div)(() => [
  css(
    mq({
      flexBasis: ["100%", "30%", "25%"],
    })
  ),
  tw`h-64 rounded-xl cursor-pointer flex-grow flex-shrink box-border m-3 justify-between`,
]);

const Title = styled(motion.div)(({ isHovered }) => [
  tw`absolute z-10 font-bold pb-3 px-1 text-xl`,
  isHovered && tw`h-64 text-white text-3xl md:text-4xl font-black px-5 py-2`,
]);

const BackgroundImage = styled(motion.div)(({ isHovered, url }) => [
  css`
    background-position: center;
    background-size: cover;
    background-image: url("${url}");
  `,
  isHovered &&
    css`
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
    `,
  tw`h-56 w-full rounded-xl`,
]);

export default function MenuCard({ titleText, imageUrl }) {
  const [isHovered, setHovered] = useState(false);
  const breakpoints = useBreakpoint();

  const wrapper = {
    hover: {
      flexBasis: brk({ default: "100%", sm: "40%", md: "30%" }, breakpoints),
    },
  };

  const backgroundImage = {
    hover: {
      height: "16rem",
      y: "0rem",
    },
    initial: {
      height: "14rem",
      y: "2rem",
    },
  };
  return (
    <Wrapper
      whileHover="hover"
      variants={wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Title isHovered={isHovered}>{titleText}</Title>
      <BackgroundImage
        isHovered={isHovered}
        url={imageUrl}
        transition={{
          ease: "easeOut",
          duration: 0.2,
        }}
        initial="initial"
        variants={backgroundImage}
      />
    </Wrapper>
  );
}

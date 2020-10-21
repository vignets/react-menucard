/** @jsx jsx */
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import tw, { styled, css } from "twin.macro";
import { useState } from "react";

const Wrapper = styled(motion.div)(() => [
  tw`box-border justify-between flex-grow flex-shrink h-64 m-3 cursor-pointer rounded-xl`,
  css`
    flex-basis: 100%;
    transition: all 0.2s ease-in-out;
    @media (min-width: 640px) {
      flex-basis: 30%;
    }
    @media (min-width: 768px) {
      flex-basis: 25%;
    }
    &:hover {
      flex-basis: 100%;
      @media (min-width: 640px) {
        flex-basis: 40%;
      }
      @media (min-width: 768px) {
        flex-basis: 32%;
      }
    }
  `,
]);

const Title = styled(motion.div)(({ isHovered }) => [
  tw`absolute z-10 px-1 pb-3 text-xl font-bold`,
  isHovered && tw`h-64 px-5 py-2 text-3xl font-black text-white md:text-4xl`,
]);

const BackgroundImage = styled(motion.div)(({ isHovered, url }) => [
  tw`w-full h-56 rounded-xl`,
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
]);

export default function MenuCard({ titleText, imageUrl }) {
  const [isHovered, setHovered] = useState(false);

  const backgroundImageVariant = {
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
        variants={backgroundImageVariant}
      />
    </Wrapper>
  );
}

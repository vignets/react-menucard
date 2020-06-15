/** @jsx jsx */
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import tw, { styled, css } from "twin.macro";

const BackgroundImage = styled.div`
  ${tw`h-64 w-full rounded-xl`}
  background-position: center;
  background-size: cover;
  background-image: url("${(props) => props.url}");
`;

export const MenuCard = ({ title, imageUrl }, id) => {
  return (
    <motion.div
      css={[
        css`
          flex-basis: 25%;
        `,
        tw`rounded-xl cursor-pointer flex-grow flex-shrink box-border m-3 justify-between`,
      ]}
      key={id}
      whileHover={{
        "flex-basis": "35%",
      }}
    >
      <div className="content">
        <h1 css={tw`font-bold pb-3 px-1 text-xl text-gray-900`}>{title}</h1>
      </div>
      <BackgroundImage url={imageUrl} />
    </motion.div>
  );
};

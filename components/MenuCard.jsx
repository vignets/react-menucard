/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw, { styled, css } from "twin.macro";

const BackgroundImage = styled.div`
  width: 100%;
  height: 90%;
  background-position: center;
  background-size: cover;
  background-image: url("${(props) => props.url}");
`;

export const MenuCard = ({ title, imageUrl }) => {
  return (
    <div css={tw`h-64 w-1/3 flex-grow box-border p-5 justify-between`}>
      <BackgroundImage url={imageUrl} />

      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Explore Now</span>
      </div>
    </div>
  );
};

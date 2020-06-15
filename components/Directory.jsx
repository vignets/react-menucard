/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";
import { MenuCard } from "../components/MenuCard";

const sections = [
  {
    title: "Technology",
    imageUrl:
      "/images/technology-christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg",
  },
  {
    title: "Finance",
    imageUrl: "/images/finance-adeolu-eletu-unRkg2jH1j0-unsplash.jpg",
  },
  {
    title: "Education",
    imageUrl: "/images/education-annie-spratt-4-4WPFLVhAY-unsplash.jpg",
  },
  {
    title: "Designing",
    imageUrl: "/images/design-convertkit-gLWT-VqMG20-unsplash.jpg",
  },
  {
    title: "Architecture",
    imageUrl: "/images/architecture-lance-anderson-QdAAasrZhdk-unsplash.jpg",
  },
];

export const Directory = () => (
  <div css={tw`max-w-screen-lg p-10 mx-auto`}>
    <h1 css={tw`font-bold px-4 text-3xl`}>Categories</h1>
    <div css={tw`flex flex-row flex-wrap box-border`}>
      {sections.map(({ title, imageUrl }, id) => (
        <MenuCard key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  </div>
);

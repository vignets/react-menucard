/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";
import { MenuCard } from "../components/MenuCard";

const sections = [
  {
    title: "Technology",
    imageUrl:
      "/images/technology-christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg",
    id: 1,
  },
  {
    title: "Finance/Accounting",
    imageUrl: "/images/finance-adeolu-eletu-unRkg2jH1j0-unsplash.jpg",
    id: 2,
  },
  {
    title: "Education",
    imageUrl: "/images/education-annie-spratt-4-4WPFLVhAY-unsplash.jpg",
    id: 3,
  },
  {
    title: "Designing",
    imageUrl: "/images/design-convertkit-gLWT-VqMG20-unsplash.jpg",
    id: 4,
  },
  {
    title: "Architecture",
    imageUrl: "/images/architecture-lance-anderson-QdAAasrZhdk-unsplash.jpg",
    id: 5,
  },
];

export const Directory = () => (
         <div css={tw`flex flex-row flex-wrap box-border`}>
           {sections.map(({ title, imageUrl, id }) => (
             <MenuCard key={id} title={title} imageUrl={imageUrl} />
           ))}
         </div>
       );

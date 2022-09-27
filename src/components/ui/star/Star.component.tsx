import { FC } from "react";
import StarSVGSelector, { Star } from "./StarSVGSelector";

interface IStarProps {
  type: Star;
}

const StarComponent: FC<IStarProps> = ({ type }) => {
  return <>{StarSVGSelector(type)}</>;
};

export default StarComponent;

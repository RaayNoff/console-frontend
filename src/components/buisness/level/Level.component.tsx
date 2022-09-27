import { FC, useState, useMemo } from "react";
import StarComponent from "../../ui/star/Star.component";
import { Star } from "../../ui/star/StarSVGSelector";
import s from "./level.module.scss";

interface ILevelProps {
  stars: number;
}

const LevelComponent: FC<ILevelProps> = ({ stars }) => {
  const [fullStars, setFullStars] = useState(0);
  const [halfStars, setHalfStars] = useState(0);
  const [emptyStars, setEmptyStars] = useState(0);

  useMemo(() => {
    const temp = 5 - (5 - stars);
    setFullStars(Math.floor(temp));
    stars % 1 === 0.5 ? setHalfStars(1) : setHalfStars(0);
    setEmptyStars(5 - (fullStars + halfStars));
  }, [stars, fullStars, halfStars]);

  return (
    <div className={s.level}>
      {new Array(fullStars).fill("").map((f, i) => (
        <StarComponent key={i} type={Star.filled} />
      ))}
      {new Array(halfStars).fill("").map((h, i) => (
        <StarComponent key={i} type={Star.halfFilled} />
      ))}
      {new Array(emptyStars).fill("").map((e, i) => (
        <StarComponent key={i} type={Star.notFilled} />
      ))}
    </div>
  );
};

export default LevelComponent;

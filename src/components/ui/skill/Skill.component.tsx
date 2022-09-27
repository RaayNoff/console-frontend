import { FC } from "react";
import backendEndpoints from "../../../data/classes/backendEndpoints";
import LevelComponent from "../../buisness/level/Level.component";
import s from "./skill.module.scss";

interface ISkillProps {
  name: string;
  image: string;
  stars: number;
}

const SkillComponent: FC<ISkillProps> = ({ image, name, stars }) => {
  return (
    <article className={s.skill}>
      <div className={s.skill_img}>
        <img src={`${backendEndpoints.baseUrl}/${image}`} alt="skill" />
      </div>
      <section className={s.skill_data}>
        <p className={s.skill_name}>{name}</p>
        <div className={s.stars}>
          <LevelComponent stars={stars} />
        </div>
      </section>
    </article>
  );
};

export default SkillComponent;

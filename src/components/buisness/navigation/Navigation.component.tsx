import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../data/enum/routePath";
import s from "./navigation.module.scss";

const NavigationComponent: FC = () => {
  return (
    <nav className={s.navigation}>
      <Link
        to={RoutePath.PORTFOLIO}
        title="Portfolio"
        className={s.navigation__item}
      >
        PORTFOLIO
      </Link>
      <Link to={RoutePath.SKILLS} title="Skills" className={s.navigation__item}>
        SKILLS
      </Link>
    </nav>
  );
};

export default NavigationComponent;

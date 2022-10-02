import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RoutePath } from "../../../data/enum/routePath";
import s from "./navigation.module.scss";

const NavigationComponent: FC = () => {
  const activeStyle = {
    color: "#2a2a2a",
  };

  return (
    <nav className={s.navigation}>
      <NavLink
        to={"../" + RoutePath.HOME}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        title="Home"
        className={s.navigation__item}
      >
        HOME
      </NavLink>
      <NavLink
        to={"../" + RoutePath.PORTFOLIO}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        title="Portfolio"
        className={s.navigation__item}
      >
        PORTFOLIO
      </NavLink>
      <NavLink
        to={"../" + RoutePath.SKILLS}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        title="Skills"
        className={s.navigation__item}
      >
        SKILLS
      </NavLink>
    </nav>
  );
};

export default NavigationComponent;

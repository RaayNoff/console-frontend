import { Navigate } from "react-router-dom";
import HomePageComponent from "../components/pages/home/HomePage.component";
import PortfolioPageComponent from "../components/pages/portfolio/PortfolioPage.component";
import SkillsPageComponent from "../components/pages/skills/SkillsPage.component";
import { RoutePath } from "../data/enum/routePath";
import { IRoute } from "../models/route";

export default class RoutesEntity {
  static publicRoutes: IRoute[] = [
    {
      id: 0,
      path: RoutePath.NOROUTE,
      component: <Navigate to={RoutePath.HOME} />,
    },
    {
      id: 1,
      path: RoutePath.HOME,
      component: <HomePageComponent />,
    },
    {
      id: 2,
      path: RoutePath.SKILLS,
      component: <SkillsPageComponent />,
    },
    {
      id: 3,
      path: RoutePath.PORTFOLIO,
      component: <PortfolioPageComponent />,
    },
  ];
}

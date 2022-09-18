import { Navigate } from "react-router-dom";
import HomePageComponent from "../components/pages/home/HomePage.component";
import { IRoute } from "../models/route";

export default class RoutesEntity {
  static publicRoutes: IRoute[] = [
    {
      id: 0,
      path: "",
      component: <Navigate to={"home"} />,
    },
    {
      id: 1,
      path: "home",
      component: <HomePageComponent />,
    },
  ];
}

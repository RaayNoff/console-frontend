import React, { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import MainLayout from "../../layouts/main/mainLayout";
import s from "./portfolioPage.module.scss";

const PortfolioPageComponent: FC = () => {
  useDynamicPanelText();

  return <MainLayout>Portfolio</MainLayout>;
};

export default PortfolioPageComponent;

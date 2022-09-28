import { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import { portfolioService } from "../../../services/api/portfolioService";
import MainLayout from "../../layouts/main/mainLayout";
import s from "./portfolioPage.module.scss";

const PortfolioPageComponent: FC = () => {
  const { data: cases } = portfolioService.useFetchAllCasesQuery(0);
  useDynamicPanelText();

  return <MainLayout>Portfolio</MainLayout>;
};

export default PortfolioPageComponent;

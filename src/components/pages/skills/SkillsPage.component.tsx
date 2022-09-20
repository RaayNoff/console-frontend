import React, { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import MainLayout from "../../layouts/main/mainLayout";
import s from "./skillspage.module.scss";

const SkillsPageComponent: FC = () => {
  useDynamicPanelText();

  return <MainLayout>Skills!</MainLayout>;
};

export default SkillsPageComponent;

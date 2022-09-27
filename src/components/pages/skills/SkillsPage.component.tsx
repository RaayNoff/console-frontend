import React, { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import { skillsService } from "../../../services/api/skillsService";
import MainLayout from "../../layouts/main/mainLayout";
import SkillComponent from "../../ui/skill/Skill.component";
import s from "./skillspage.module.scss";

const SkillsPageComponent: FC = () => {
  const { data: skills } = skillsService.useFetchAllSkillsQuery(0);

  useDynamicPanelText();

  return (
    <MainLayout>
      <section className={s.skills}>
        <div className="container">
          <h1 className={s.skills__title}>My stack:</h1>
          <section className={s.skills_list}>
            {skills?.map((skill) => (
              <SkillComponent
                key={skill.id}
                image={skill.image}
                name={skill.name}
                stars={skill.stars}
              />
            ))}
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

export default SkillsPageComponent;

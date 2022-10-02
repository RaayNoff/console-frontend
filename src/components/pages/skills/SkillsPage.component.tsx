import React, { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { skillsService } from "../../../services/api/skillsService";
import SkillCreatorComponent from "../../buisness/skillCreator/SkillCreator.component";
import MainLayout from "../../layouts/main/mainLayout";
import SkillComponent from "../../buisness/skill/Skill.component";
import s from "./skillspage.module.scss";

const SkillsPageComponent: FC = () => {
  const { data: skills } = skillsService.useFetchAllSkillsQuery(0, {
    pollingInterval: 30000,
  });
  const { isAdmin } = useTypedSelector((state) => state.access);

  useDynamicPanelText();

  return (
    <MainLayout>
      <section className={s.skills}>
        <div className="container">
          <h1 className={s.skills__title}>My stack:</h1>
          <section className={s.skills_list}>
            {skills?.map((skill) => (
              <SkillComponent
                id={skill.id}
                key={skill.id}
                image={skill.image}
                name={skill.name}
                stars={skill.stars}
              />
            ))}
            {isAdmin && <SkillCreatorComponent />}
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

export default SkillsPageComponent;

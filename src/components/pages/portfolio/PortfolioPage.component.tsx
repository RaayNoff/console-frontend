import { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import { portfolioService } from "../../../services/api/portfolioService";
import CaseCreatorComponent from "../../buisness/caseCreator/CaseCreator.component";
import MainLayout from "../../layouts/main/mainLayout";
import CaseComponent from "../../buisness/case/Case.component";
import s from "./portfolioPage.module.scss";

const PortfolioPageComponent: FC = () => {
  const { data: cases } = portfolioService.useFetchAllCasesQuery(0, {
    pollingInterval: 30000,
  });

  useDynamicPanelText();
  return (
    <MainLayout>
      <section className={s.portfolio}>
        <div className="container">
          <h1 className={s.portfolio__title}>Portfolio:</h1>
          <section className={s.portfolio__cases}>
            {cases?.map((c) => (
              <CaseComponent
                key={c.id}
                id={c.id}
                name={c.name}
                description={c.description}
                url={c.url}
              />
            ))}
            <CaseCreatorComponent />
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioPageComponent;

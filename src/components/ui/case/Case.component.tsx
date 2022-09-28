import { FC } from "react";
import s from "./case.module.scss";

interface ICaseProps {
  name: string;
  description: string;
  url: string;
}

const CaseComponent: FC<ICaseProps> = ({ name, description, url }) => {
  return (
    <article className={s.case}>
      <section className={s.case__header}>
        <header className={s.case__title}>{name}</header>
        <a href={url} target="_blank" rel="noreferrer" className={s.case__link}>
          View repository
        </a>
      </section>
      <p className={s.case__description}>{description}</p>
    </article>
  );
};

export default CaseComponent;

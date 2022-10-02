import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import NavigationComponent from "../../buisness/navigation/Navigation.component";
import s from "./mainLayout.module.scss";

interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  const { base, path } = useTypedSelector((state) => state.panelLine);

  return (
    <main className={s.mainlayout}>
      <NavigationComponent />
      {children}

      <div className={s.panel}>
        <div className={s.panel__text}>{base + path}</div>
        <hr className={s.panel__hr} />
      </div>

      <div className={s.effects}>
        <div className={s.noise}></div>
        <div className={s.lines}></div>
      </div>
    </main>
  );
};

export default MainLayout;

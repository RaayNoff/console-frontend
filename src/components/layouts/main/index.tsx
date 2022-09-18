import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import s from "./style.module.scss";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayoutComponent: FC<IMainLayoutProps> = ({ children }) => {
  const { base, path } = useTypedSelector((state) => state.panelLine);

  return (
    <main className={s.mainlayout}>
      {children}

      <div className={s.panel}>
        {base + path}
        <hr className={s.panel__hr} />
      </div>

      <div className={s.effects}>
        <div className={s.noise}></div>
        <div className={s.lines}></div>
      </div>
    </main>
  );
};

export default MainLayoutComponent;

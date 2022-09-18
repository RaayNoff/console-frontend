import React, { FC, useState } from "react";
import s from "./style.module.scss";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayoutComponent: FC<IMainLayoutProps> = ({ children }) => {
  const [text, setText] = useState("V://System32/http/services/raaynoff");

  return (
    <main className={s.mainlayout}>
      {children}

      <div className={s.panel}>
        {text}
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

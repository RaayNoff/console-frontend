import { FC } from "react";
import s from "./welcome.module.scss";

const WelcomeComponent: FC = () => {
  return (
    <article className={s.welcome} data-language="en">
      <h2 className={s.welcome__title}>Attention!</h2>
      <p className={s.welcome__info}>
        Greetings! My name is Dmitry and I'am frontend developer.
        <br />
        Glad that you visited my personal page.
        <br />
        Here you can find comprehensive information about me.
      </p>
    </article>
  );
};

export default WelcomeComponent;

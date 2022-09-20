import { FC } from "react";
import ContactsComponent from "../../buisness/contacts/Contacts.component";
import MainLayout from "../../layouts/main/mainLayout";
import s from "./homepage.module.scss";

const HomePageComponent: FC = () => {
  return (
    <MainLayout>
      <main className={s.home}>
        <header className={s.home__title} data-language="ru">
          Hi! My name is Dmitry, also known as Raaynoff. I am a junior frontend
          developer. I am very interested in the web and everything related to
          it. Here you can find comprehensive information about how to contact
          me and a little about me.
        </header>
        <section className={s.home__content}>
          <article className={s.home__about}>About me</article>
          <aside className={s.home__aside}></aside>
        </section>
        <footer className={s.home__contact}>
          <ContactsComponent></ContactsComponent>
        </footer>
      </main>
    </MainLayout>
  );
};

export default HomePageComponent;

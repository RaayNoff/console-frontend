import { FC } from "react";
import { useDynamicPanelText } from "../../../hooks/useDynamicPanelText";
import ContactsComponent from "../../buisness/contacts/Contacts.component";
import NavigationComponent from "../../buisness/navigation/Navigation.component";
import WelcomeComponent from "../../buisness/welcome/Welcome.component";
import MainLayout from "../../layouts/main/mainLayout";
import s from "./homepage.module.scss";

const HomePageComponent: FC = () => {
  useDynamicPanelText();

  return (
    <MainLayout>
      <main className={s.home}>
        <h1 className={s.home__title} data-language="en">
          Dmitry Tarasenko
        </h1>
        <section className={s.home__container}>
          <section className={s.home__content}>
            <div className={s.home__welcome}>
              <WelcomeComponent />
            </div>
          </section>
        </section>
        <footer className={s.home__contact}>
          <ContactsComponent></ContactsComponent>
        </footer>
      </main>
    </MainLayout>
  );
};

export default HomePageComponent;

import React from "react";
import { ContactLinks } from "../../../data/enum/contactLinks";
import ContactLink from "../../ui/link/ContactLink.component";
import s from "./contacts.module.scss";

const ContactsComponent = () => {
  return (
    <footer className={s.home__contact}>
      <ul className={s.contacts}>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.TG} title="TELEGRAM" />
        </li>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.DISCORD} title="DISCORD" />
        </li>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.VK} title="VK" />
        </li>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.GITHUB} title="GITHUB" />
        </li>
      </ul>
    </footer>
  );
};

export default ContactsComponent;

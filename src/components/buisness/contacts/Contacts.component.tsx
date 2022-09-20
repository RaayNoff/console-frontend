import React from "react";
import { ContactLinks } from "../../../data/enum/contactLinks";
import ContactLink from "../../ui/link/ContactLink.component";
import s from "./contacts.module.scss";

const ContactsComponent = () => {
  return (
    <footer className={s.home__contact}>
      <ul className={s.contacts}>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.TG} title="TELEGRAM">
            TELEGRAM
          </ContactLink>
        </li>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.DISCORD} title="DISCORD">
            DISCORD
          </ContactLink>
        </li>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.VK} title="VK">
            VK
          </ContactLink>
        </li>
        <li className={s.contacts__item}>
          <ContactLink linkRef={ContactLinks.GITHUB} title="GITHUB">
            GITHUB
          </ContactLink>
        </li>
      </ul>
    </footer>
  );
};

export default ContactsComponent;

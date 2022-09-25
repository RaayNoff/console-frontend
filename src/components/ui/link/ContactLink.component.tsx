import React, { FC } from "react";
import { ContactLinks } from "../../../data/enum/contactLinks";
import s from "./contactLink.module.scss";
import ContactLinkSVGSelector from "./ContactLinkSVGSelector";

interface IContactLinkProps {
  linkRef: ContactLinks;
  title: string;
}

const ContactLinkComponent: FC<IContactLinkProps> = ({ linkRef, title }) => {
  return (
    <a
      data-language="en"
      className={s.contactLink}
      href={linkRef}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {ContactLinkSVGSelector(linkRef)}
    </a>
  );
};

export default ContactLinkComponent;

import React, { FC } from "react";
import { ContactLinks } from "../../../data/enum/contactLinks";
import s from "./contactLink.module.scss";

interface IContactLinkProps {
  children?: React.ReactNode;
  linkRef: ContactLinks;
  title: string;
}

const ContactLinkComponent: FC<IContactLinkProps> = ({
  children,
  linkRef,
  title,
}) => {
  return (
    <a
      className={s.contactLink}
      href={linkRef}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </a>
  );
};

export default ContactLinkComponent;

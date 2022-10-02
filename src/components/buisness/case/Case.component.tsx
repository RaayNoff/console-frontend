import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { portfolioService } from "../../../services/api/portfolioService";
import s from "./case.module.scss";

interface ICaseProps {
  id: number;
  name: string;
  description: string;
  url: string;
}

type FormValues = {
  name: string;
  description: string;
  url: string;
};

const CaseComponent: FC<ICaseProps> = ({ id, name, description, url }) => {
  const { isAdmin } = useTypedSelector((state) => state.access);
  const [deleteCase] = portfolioService.useDeleteCaseMutation();
  const [updateCase] = portfolioService.useUpdateCaseMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const [isEditing, setIsEditing] = useState(false);

  const onDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteCase({ id });
  };

  const onEditHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditing((prev) => !prev);
  };

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    updateCase({
      id: id,
      description: data.description,
      name: data.name,
      url: data.url,
    });
    setIsEditing((prev) => !prev);
  };

  const cancelHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditing((prev) => !prev);
  };

  if (isEditing && isAdmin)
    return (
      <form className={s.case} onSubmit={handleSubmit(submitHandler)}>
        <input
          className={s.case__input}
          type="text"
          {...register("name", { required: true, maxLength: 30, value: name })}
        />
        <textarea
          className={s.case__textarea}
          {...register("description", {
            required: true,
            maxLength: 120,
            value: description,
          })}
        ></textarea>
        <input
          className={s.case__input}
          type="text"
          {...register("url", { required: true, maxLength: 120, value: url })}
        ></input>
        <section>
          <button disabled={!isValid} className={s.case__submit} type="submit">
            Update
          </button>
          <button
            onClick={(e) => cancelHandler(e)}
            type="button"
            className={s.case__cancel}
          >
            Cancel
          </button>
        </section>
      </form>
    );

  return (
    <article className={s.case}>
      <section className={s.case__header}>
        <header className={s.case__title}>{name}</header>
        <section className={s.case__controls}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={s.case__link}
          >
            View repository
          </a>
          {isAdmin && (
            <button
              className={s.case__control}
              onClick={(e) => onDeleteHandler(e)}
            >
              Delete
            </button>
          )}
          {isAdmin && (
            <button
              className={s.case__control}
              onClick={(e) => onEditHandler(e)}
            >
              Edit
            </button>
          )}
        </section>
      </section>
      <p className={s.case__description}>{description}</p>
    </article>
  );
};

export default CaseComponent;

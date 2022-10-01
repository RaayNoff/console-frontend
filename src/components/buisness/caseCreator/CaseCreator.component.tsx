import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { portfolioService } from "../../../services/api/portfolioService";
import s from "./caseCreator.module.scss";

type FormValues = {
  name: string;
  description: string;
  url: string;
};

const CaseCreatorComponent: FC = () => {
  const { isAdmin } = useTypedSelector((state) => state.access);
  const [createCase] = portfolioService.useCreateCaseMutation();

  const {
    register,
    formState: { isValid },
    reset,
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const createHandler: SubmitHandler<FormValues> = (data) => {
    createCase({
      name: data.name,
      description: data.description,
      url: data.url,
    });
    reset();
  };

  if (!isAdmin) return null;

  return (
    <form className={s.creator} onSubmit={handleSubmit(createHandler)}>
      <input
        className={s.creator__input}
        {...register("name", {
          required: true,
          maxLength: 30,
        })}
        placeholder="Name..."
      />
      <textarea
        className={s.creator__textarea}
        {...register("description", {
          required: true,
          maxLength: 120,
        })}
        placeholder="Description..."
      ></textarea>
      <input
        className={s.creator__input}
        {...register("url", {
          required: true,
          maxLength: 100,
        })}
        placeholder="Link..."
      />
      <button className={s.creator__button} disabled={!isValid} type="submit">
        Create
      </button>
    </form>
  );
};

export default CaseCreatorComponent;

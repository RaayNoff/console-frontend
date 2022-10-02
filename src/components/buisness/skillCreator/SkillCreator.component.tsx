import { Rating } from "@mui/material";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { skillsService } from "../../../services/api/skillsService";
import s from "./skillCreator.module.scss";

type FormValues = {
  picture: FileList;
  name: string;
  stars: number;
};

const SkillCreatorComponent: FC = () => {
  const {
    register,
    reset,
    formState: { isValid },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onChange" });
  const [createSkill] = skillsService.useCreateSkillMutation();
  const [starsValue, setStarsValue] = useState(0);

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    const formData = new FormData();

    formData.append("picture", data.picture[0]);
    formData.append("name", data.name);
    formData.append("stars", starsValue.toString());
    formData.append("key", localStorage.getItem("key") || "");
    createSkill(formData);

    reset();
  };

  return (
    <form
      encType="multipart/form-data"
      className={s.creator}
      onSubmit={handleSubmit(submitHandler)}
    >
      <input
        accept="image/svg+xml"
        type="file"
        id="file-input"
        {...register("picture", { required: true })}
      />
      <label className={s.creator__file} htmlFor="file-input">
        Choose a file
      </label>
      <input
        className={s.creator__input}
        type="text"
        {...register("name", { required: true })}
        placeholder="Name..."
      />
      <Rating
        size="medium"
        className={s.creator__rating}
        value={starsValue}
        precision={0.5}
        sx={{
          color: "#3ed08e",
          ".MuiSvgIcon-root": {
            fill: "#3ed08e",
          },
        }}
        onChange={(event, newValue) => {
          setStarsValue(newValue || 0);
        }}
      />
      <button className={s.creator__submit} disabled={!isValid}>
        Create
      </button>
    </form>
  );
};

export default SkillCreatorComponent;

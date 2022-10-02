import { Rating } from "@mui/material";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import backendEndpoints from "../../../data/classes/backendEndpoints";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { skillsService } from "../../../services/api/skillsService";
import s from "./skill.module.scss";

interface ISkillProps {
  id: number;
  name: string;
  image: string;
  stars: number;
}

type FormValues = {
  picture: FileList;
  name: string;
};

const SkillComponent: FC<ISkillProps> = ({ id, image, name, stars }) => {
  const { isAdmin } = useTypedSelector((state) => state.access);
  const [deleteSkill] = skillsService.useDeleteSkillMutation();
  const [updateSkill] = skillsService.useUpdateSkillMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [valueStars, setValueStars] = useState(stars);
  const {
    register,
    formState: { isValid },
    reset,
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteSkill({ id });
  };
  const updateHandler: SubmitHandler<FormValues> = (data) => {
    const formData = new FormData();

    console.log(data);

    formData.append("id", id.toString());
    formData.append("name", data.name);
    formData.append("image", image);
    formData.append("stars", valueStars.toString());
    formData.append("key", localStorage.getItem("key") || "");
    formData.append("picture", data.picture[0]);
    updateSkill(formData);

    reset();
    setIsEditing(false);
  };

  if (isEditing && isAdmin) {
    return (
      <form
        encType="multipart/form-data"
        className={s.skill}
        onSubmit={handleSubmit(updateHandler)}
      >
        <input
          accept="image/svg+xml"
          type="file"
          id="file-input"
          {...register("picture")}
        />
        <label className={s.skill__file} htmlFor="file-input">
          Choose a file
        </label>
        <input
          className={s.skill__input}
          type="text"
          {...register("name", { required: true, value: name })}
        />
        <Rating
          size="medium"
          className={s.skill__rating}
          value={valueStars}
          precision={0.5}
          sx={{
            color: "#3ed08e",
            ".MuiSvgIcon-root": {
              fill: "#3ed08e",
            },
          }}
          onChange={(event, newValue) => {
            setValueStars(newValue || 0);
          }}
        />

        <section className={s.controls}>
          <button type="submit" className={s.controls__button}>
            Update
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEditing((prev) => !prev);
              reset();
            }}
            className={s.controls__button}
          >
            Cancel
          </button>
        </section>
      </form>
    );
  }

  return (
    <article className={s.skill}>
      <div className={s.skill_img}>
        <img src={`${backendEndpoints.baseUrl}/${image}`} alt="skill" />
      </div>
      <section className={s.skill_data}>
        <p className={s.skill__name}>{name}</p>
        <div className={s.stars}>
          <Rating
            value={stars}
            readOnly
            precision={0.5}
            sx={{
              color: "#3ed08e",
              ".MuiSvgIcon-root": {
                fill: "#3ed08e",
              },
            }}
          />
        </div>
      </section>
      <section className={s.controls}>
        {isAdmin && (
          <button
            className={s.controls__button}
            onClick={(e) => deleteHandler(e)}
          >
            Delete
          </button>
        )}
        {isAdmin && (
          <button
            className={s.controls__button}
            onClick={(e) => setIsEditing((prev) => !prev)}
          >
            Edit
          </button>
        )}
      </section>
    </article>
  );
};

export default SkillComponent;

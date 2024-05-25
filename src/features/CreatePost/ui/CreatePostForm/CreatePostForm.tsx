import style from "./CreatePostForm.module.scss";
import Button from "shared/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { getLogin } from "features/AuthByEmail/model/selectors/getLogin/getLogin";

type Inputs = {
  imageUrl: string;
  title: string;
  text: string;
};

const CreatePostForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { email, password, error, isLoading } = useSelector(getLogin);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // dispatch(LoginByEmail(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.CreatePostForm}>
      <div className={style.header}>
        <h2>Create post</h2>

        <input
          {...register("title", { required: true })}
          type="text"
          className={style.formStyle}
          placeholder="Title"
        />
      </div>

      <div className={style.body}>
        <div className={style.left}>
          <div className={style.formGroup}>
            <textarea
              {...register("text", { required: true })}
              className={`${style.formStyleText} ${style.formStyleTextArea}`}
              placeholder="Text"
            />
          </div>
        </div>

        <div className={style.right}>
          <div className={style.formGroup}>
            <input
              {...register("imageUrl")}
              type="text"
              className={style.formStyle}
              placeholder="Image Url"
            />
          </div>

          <img
            src="https://4x4photo.ru/wp-content/uploads/2023/07/3367df95-1e07-4b6d-b39f-025c33ae1706.jpg"
            alt=""
            className={style.image}
          />
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;

import style from "./CreatePostForm.module.scss";
import Button from "shared/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import { CreatePost } from "features/PostsOperations/model/services/CreatePost/CreatePost";

import { useEffect, useState } from "react";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { getPostErrorSelector } from "features/LikedPostOperations/model/selectors/getPostErrorSelector/getPostErrorSelector";

type Inputs = {
  imageUrl: string;
  title: string;
  text: string;
};

const CreatePostForm = () => {
  const [posts, setPosts] = useState([
    { id: "", imageUrl: "", title: "", text: "", date: "" },
  ]);
  const [image, setImage] = useState<string>(
    "https://4x4photo.ru/wp-content/uploads/2023/07/3367df95-1e07-4b6d-b39f-025c33ae1706.jpg"
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetPosts()).then((res) => {
      setPosts(res.payload);
    });
  }, []);
  const authData = useSelector(getAuthData);
  const IsError = useSelector(getPostErrorSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let date = new Date();

    const NewPost = {
      userId: authData?.authData?.id,
      title: data?.title,
      text: data?.text,
      imageUrl: image,
      id: `${posts.length + 1}`,
      date: ` ${date.getDate()}.${date.getMonth()}.${date.getFullYear() % 100}`,
    };
    dispatch(CreatePost(NewPost));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.CreatePostForm}>
      <div className={style.header}>
        <h2>Create post</h2>
        {IsError && (
          <h4 className={style.errorTitle}>Error when creating a post</h4>
        )}
        <input
          {...register("title", { required: true })}
          type="text"
          className={style.formStyle}
          placeholder="Title"
          maxLength={40}
        />
        {errors.title && (
          <span className={style.errorTitle} role="alert">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className={style.body}>
        <div className={style.left}>
          <textarea
            {...register("text", { required: true })}
            className={`${style.formStyleText} ${style.formStyleTextArea}`}
            placeholder="Text"
          />
          {errors.text && (
            <span className={style.errorTitle} role="alert">
              {errors.text.message}
            </span>
          )}
        </div>

        <div className={style.right}>
          <div className={style.formGroup}>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              className={style.formStyle}
              placeholder="Image Url"
            />
          </div>

          <img src={image} alt="" className={style.image} />
        </div>
      </div>
      <Button>Create</Button>
    </form>
  );
};

export default CreatePostForm;

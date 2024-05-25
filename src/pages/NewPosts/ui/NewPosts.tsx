import { Counter } from "entities/Counter";
import Post from "entities/Post/ui/Post";
import { useTranslation } from "react-i18next";
import style from "./NewPost.module.scss";

const NewPosts = () => {
  const { t } = useTranslation("about");
  return (
    <section className={`section container ${style.NewPosts}`}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default NewPosts;

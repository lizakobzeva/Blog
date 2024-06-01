import Post from "entities/Post/ui/Post";
import style from "./NewPost.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "app/providers/StoreProvider";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { useSelector } from "react-redux";
import { getPostsSelector } from "features/LikedPostOperations/model/selectors/getPostsSelector/getPostsSelector";
import Loader from "shared/ui/Loader";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";

const NewPosts = () => {
  const [posts, setPosts] = useState([
    { id: "", imageUrl: "", title: "", text: "", date: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const authData = useSelector(getAuthData)?.authData;
  const likedPosts = authData?.likedPosts ?? [];
  let NewPostsArray = [...posts].reverse();

  useEffect(() => {
    setIsLoading(true);
    dispatch(GetPosts()).then((res) => {
      setPosts(res.payload);
      setIsLoading(false);
    });
  }, [authData?.id]);

  return isLoading ? (
    <Loader />
  ) : (
    <section className={`section container ${style.NewPosts}`}>
      {NewPostsArray.map((post) => (
        <Post
          like={likedPosts.includes(`${post.id}`)}
          key={post.id}
          imageUrl={post.imageUrl}
          title={post.title}
          postId={post.id}
          text={post.text}
          date={post.date}
        />
      ))}
    </section>
  );
};

export default NewPosts;

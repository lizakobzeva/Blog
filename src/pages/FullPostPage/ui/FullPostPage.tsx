import { useParams } from "react-router-dom";
import style from "./FullPostPage.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "app/providers/StoreProvider";
import { GetPost } from "features/PostsOperations/model/services/GetPost/GetPost";
import Loader from "shared/ui/Loader";
import AddLikedPostButton from "features/LikedPostOperations/ui/AddLikedPostButton/AddLikedPostButton";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";

const FullPostPage = () => {
  const params = useParams();
  const { authData } = useSelector(getAuthData);
  const [activeLike, setActiveLike] = useState(false);
  const [post, setPost] = useState({ imageUrl: "", title: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(GetPost(params.id)).then((res) => {
      setPost(res.payload);
      setIsLoading(false);
    });
    authData?.likedPosts.map((post) => console.log(typeof post, post));
    console.log(params.id);
    if (authData?.likedPosts.includes(params.id)) {
      console.log("active");
      setActiveLike(true);
    }
  }, [params]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={` section ${style.FullPostPage}`}>
      <img className={style.FullPostImage} src={`${post.imageUrl}`} alt="" />

      <div className={style.cardHeader}>
        <h2>{post.title}</h2>
        <AddLikedPostButton
          postId={params.id}
          active={activeLike}
          onClick={() => {
            setActiveLike(!activeLike);
            console.log("like");
          }}
        />
      </div>

      <p className={style.text}>{post.text}</p>
      <div className={style.cardFooter}>
        <div className={`${style.cardMeta} ${style.cardMetaViews}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            display="block"
            id="EyeOpen"
          >
            <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          2,465
        </div>
        <div className={`${style.cardMeta} ${style.cardMetaDate}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            display="block"
            id="Calendar"
          >
            <rect x="2" y="4" width="20" height="18" rx="4" />
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <path d="M2 10h20" />
          </svg>
          Jul 26, 2019
        </div>
      </div>
    </div>
  );
};

export default FullPostPage;

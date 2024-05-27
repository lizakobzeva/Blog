import { Link } from "react-router-dom";
import style from "./Post.module.scss";
import { useState } from "react";
import AddLikedPostButton from "features/LikedPostOperations/ui/AddLikedPostButton/AddLikedPostButton";

interface PostType {
  imageUrl: string;
  title: string;
  postId: string;
  like: boolean;
}
const Post = ({ imageUrl, title, postId, like }: PostType) => {
  const [activeLike, setActiveLike] = useState(like);
  return (
    <div className={style.cardList}>
      <article className={style.card}>
        <figure className={style.cardImage}>
          <img src={`${imageUrl}`} alt="" />
        </figure>
        <div className={style.cardHeader}>
          <Link to={`/${postId}`}>
            <h3>{title}</h3>
          </Link>
          <AddLikedPostButton
            postId={postId}
            active={activeLike}
            onClick={() => {
              setActiveLike(!activeLike);
              console.log("like");
            }}
          />
        </div>
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
      </article>
    </div>
  );
};

export default Post;

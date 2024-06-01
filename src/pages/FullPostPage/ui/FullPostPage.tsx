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
  const [post, setPost] = useState({
    imageUrl: "",
    title: "",
    text: "",
    date: "",
  });
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
            fill="#878787"
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 52 52"
            enable-background="new 0 0 52 52"
            xmlSpace="preserve"
            stroke="#878787"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M33.5,28 L34.5,24 L37.5,24 L36.5,28 L33.5,28 Z M32.75,31 L35.75,31 L35,34 L38,34 L38.75,31 L42,31 L42,28 L39.5,28 L40.5,24 L43.5,24 L43.5,21 L41.25,21 L42,18 L39,18 L38.25,21 L35.25,21 L36,18 L33,18 L32.25,21 L29,21 L29,24 L31.5,24 L30.5,28 L27,28 L27,31 L29.75,31 L29,34 L32,34 L32.75,31 Z M4,6 L48,6 C49.1045695,6 50,6.8954305 50,8 L50,44 C50,45.1045695 49.1045695,46 48,46 L4,46 C2.8954305,46 2,45.1045695 2,44 L2,8 L2,8 C2,6.8954305 2.8954305,6 4,6 L4,6 Z M23.8366275,26.8097576 C24.4455559,26.3642002 24.9334641,25.9694043 25.301109,25.6242683 C25.6812797,25.2673733 26.0094591,24.8272268 26.285947,24.3049719 C26.569864,23.7686843 26.711,23.1492539 26.711,22.45 C26.711,21.5526019 26.4852508,20.7469107 26.0338199,20.0386313 C25.5832061,19.3316336 24.946713,18.7766428 24.1291062,18.3755526 C23.3160118,17.9766761 22.3837622,17.778 21.335,17.778 C20.0947537,17.778 19.0147775,18.0099667 18.0977133,18.476141 C17.1848146,18.9401979 16.372479,19.6196748 15.6614599,20.5122307 L15.5124489,20.6992871 L17.596493,22.5161461 L17.7608601,22.3289503 C18.2704121,21.7486271 18.7832051,21.3201289 19.2978793,21.0419266 C19.8020352,20.7694099 20.4066387,20.632 21.115,20.632 C21.7892255,20.632 22.3117616,20.8094651 22.6952104,21.1604182 C23.0743022,21.5073835 23.263,21.9679342 23.263,22.56 C23.263,23.0431104 23.1192655,23.442373 22.8305405,23.7695946 C22.514866,24.1273591 22.0259423,24.544907 21.365273,25.0188654 C20.6187463,25.5414137 20.0501357,26.0271803 19.6608663,26.4775116 C19.2459548,26.9575074 19.039,27.5621399 19.039,28.28 L19.039,29 L22.179,29 L22.179,28.72 C22.179,28.4038392 22.2930149,28.1278031 22.5282499,27.8801874 C22.7938963,27.6005595 23.230137,27.2429852 23.8366275,26.8097576 Z M10,18 L10,29 L13,29 L13,18 L10,18 Z M11.5,34.5 C12.6045695,34.5 13.5,33.6045695 13.5,32.5 C13.5,31.3954305 12.6045695,30.5 11.5,30.5 C10.3954305,30.5 9.5,31.3954305 9.5,32.5 C9.5,33.6045695 10.3954305,34.5 11.5,34.5 Z M20.5,34.5 C21.6045695,34.5 22.5,33.6045695 22.5,32.5 C22.5,31.3954305 21.6045695,30.5 20.5,30.5 C19.3954305,30.5 18.5,31.3954305 18.5,32.5 C18.5,33.6045695 19.3954305,34.5 20.5,34.5 Z" />{" "}
            </g>
          </svg>
          {post?.text?.length}
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
          {post?.date}
        </div>
      </div>
    </div>
  );
};

export default FullPostPage;

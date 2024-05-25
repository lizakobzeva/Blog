import style from "./FullPostPage.module.scss";
const FullPostPage = () => {
  return (
    <div className={` section ${style.FullPostPage}`}>
      <img
        className={style.FullPostImage}
        src="https://new-year-party.ru/wp-content/uploads/2018/09/koty-14.jpg"
        alt=""
      />

      <div className={style.cardHeader}>
        <h2>Full Post Name</h2>
        <button className={style.iconButton}>
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
            id="Heart"
          >
            <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
          </svg>
        </button>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
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

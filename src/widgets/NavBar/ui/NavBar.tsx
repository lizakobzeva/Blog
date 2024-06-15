import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button";
import ToggleThemButton from "shared/ui/ToggleThemeButton";
import { useEffect, useState } from "react";
import { LoginRegisterModal } from "features/AuthByEmail/ui";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { useAppDispatch } from "app/providers/StoreProvider";

import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import Avatar from "shared/ui/Avatar";

const NavBar = () => {
  const [IsModal, setIsModal] = useState(false);

  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const authData = useSelector(getAuthData);

  useEffect(() => {
    setIsModal(false);
  }, [user, authData]);

  return (
    <div className={classNames(style.navbar, {}, [])}>
      <div className={style.container}>
        <div className={style.settings}>
          <ToggleThemButton />
          <Link to={"/createpost"}>
            <Button>
              <p className={style.CreatePostText}>Create post</p>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 6V18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </Link>
        </div>

        <div className={style.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/"}
          >
            New Posts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/likedposts"}
          >
            Liked
          </NavLink>
        </div>

        {user ? (
          <Avatar />
        ) : (
          <Button onClick={() => setIsModal(true)}>Log In</Button>
        )}

        <LoginRegisterModal
          isOpend={IsModal}
          onClose={() => setIsModal(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;

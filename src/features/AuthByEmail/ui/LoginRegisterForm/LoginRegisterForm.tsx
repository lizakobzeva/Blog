import { useState } from "react";
import style from "./LoginRegisterForm.module.scss";
import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
// import { getLoading } from "../../model/selectors/getLoading/getLoading";
import Loader from "shared/ui/Loader";
import { getRegister } from "../../model/selectors/getRegister/getRegister";
import { getLogin } from "features/AuthByEmail/model/selectors/getLogin/getLogin";

const LoginRegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { t } = useTranslation();

  const isLoadingLogin = useSelector(getLogin).isLoading;
  const isLoadingRegister = useSelector(getRegister).isLoading;

  return (
    <article className={isSignUp ? style.Click : ""}>
      <div className={style.Titles}>
        <h3 onClick={() => setIsSignUp(true)}>{t("Sign Up")}</h3>
        <h3 onClick={() => setIsSignUp(false)}>{t("Log In")}</h3>
      </div>

      <label htmlFor="reg-log"></label>
      <div className={style.card3DWrap}>
        <div className={style.card3DWrapper}>
          <div className={style.cardFront}>
            {isLoadingLogin ? <Loader /> : <LoginForm />}
          </div>
          <div className={style.cardBack}>
            {isLoadingRegister ? <Loader /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </article>
  );
};

export default LoginRegisterForm;

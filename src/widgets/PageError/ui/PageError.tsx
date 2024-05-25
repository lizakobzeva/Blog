import { useTranslation } from "react-i18next";
import style from "./PageError.module.scss";
import sadcatImage from "shared/assets/SadCat.png";

const PageError = () => {
  const { t } = useTranslation();
  return (
    <div className={style.PageError}>
      <h1>{t("Something went wrong, try reloading the page")}</h1>
      <img src={sadcatImage} alt="" />
    </div>
  );
};

export default PageError;

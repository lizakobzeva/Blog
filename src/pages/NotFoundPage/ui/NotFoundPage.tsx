import { useTranslation } from "react-i18next";
import style from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={style.notFound}>
      <h2 className={style.title}>{t("Page not found")}</h2>
    </div>
  );
};

export default NotFoundPage;

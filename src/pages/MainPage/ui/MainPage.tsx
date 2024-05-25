import style from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button";

const MainPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`${style.mainPage} section`}>
      <h1>{t("MainPage text")}</h1>
      <Button>Кнопька</Button>
    </section>
  );
};
export default MainPage;

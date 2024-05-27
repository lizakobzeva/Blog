import style from "./MainPage.module.scss";
import Button from "shared/ui/Button";

const MainPage = () => {
  return (
    <section className={`${style.mainPage} section`}>
      <h1>"MainPage text"</h1>
      <Button>Кнопька</Button>
    </section>
  );
};
export default MainPage;

import style from "./LoginRegisterForm.module.scss";
import Button from "shared/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/providers/StoreProvider";
import { RegisterByEmail } from "../../model/services/RegisterByEmail/RegisterByEmail";
import { getRegister } from "features/AuthByEmail/model/selectors/getRegister/getRegister";

type Inputs = {
  name: string;
  email: string;
  password: string;
  cart: Array<string>;
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { name, email, password, error, isLoading } = useSelector(getRegister);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const dataReg = {
      name: data.name,
      email: data.email,
      password: data.password,
      likedPosts: [""],
    };
    dispatch(RegisterByEmail(dataReg));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.centerWrap}>
      {error && <h4 className={style.errorTitle}>Ошибка при регистрации</h4>}
      <h4 className={style.cardTitle}>{t("Sign Up")}</h4>
      <div className={style.formGroup}>
        <input
          {...register("name", { required: true })}
          type="text"
          className={style.formStyle}
          placeholder={t("Your Name")}
        />
      </div>
      <div className={style.formGroup}>
        <input
          {...register("email", { required: true })}
          type="email"
          className={style.formStyle}
          placeholder={t("Your Email")}
        />
      </div>
      <div className={style.formGroup}>
        <input
          {...register("password", { required: true })}
          type="password"
          className={style.formStyle}
          placeholder={t("Your Password")}
        />
      </div>
      <Button>{t("Submit")}</Button>
    </form>
  );
};

export default RegisterForm;

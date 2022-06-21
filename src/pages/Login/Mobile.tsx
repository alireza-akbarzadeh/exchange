import * as React from "react";
import { Button, Input, FormControl, Lable } from "./Styled.Login";
import { useTranslation } from "react-i18next";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { password } from "../../utils/regex";
import CountryCode from "./CountryCode";
type Inputs = {
  username: string;
  password: string;
};
const Mobile = () => {
  const [showPass, setShowPass] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { t } = useTranslation();
  const handleLogin = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <FormControl>
          <Lable htmlFor="" className="dark:text-white text-black mb-2 block">
            {t("Mobile")}
          </Lable>
          <div className="flex">
            <CountryCode />
            <Input
              className={
                errors.username ? "ring-red-500  ring-2 flex-auto" : "flex-auto"
              }
              {...register("username", { required: true })}
              type={"text"}
            />
          </div>
          {errors.username && (
            <span className="text-red-500 mt-4 block">
              {t("Please_enter_your_email")}
            </span>
          )}
        </FormControl>
        <FormControl>
          <Lable htmlFor="" className="dark:text-white text-black mb-2 block">
            {t("Password")}
          </Lable>
          <div className="relative">
            <Input
              className={errors.password ? "ring-red-500 ring-2" : ""}
              {...register("password", { pattern: password, required: true })}
              type={showPass ? "text" : "password"}
            />
            {errors.password && (
              <span className="text-red-500 mt-4 block">
                {t("Please_enter_your_password")}
              </span>
            )}
            <span
              onClick={() => setShowPass(!showPass)}
              className={`cursor-pointer absolute top-3  dark:text-gray-500 ${
                t("direction") === "rtl" ? "left-5" : "right-5"
              } `}
            >
              {showPass ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
        </FormControl>
        <Button>{t("Login")}</Button>
      </form>
    </div>
  );
};

export default Mobile;

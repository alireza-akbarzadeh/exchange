import * as React from "react";
import { Button, Input, FormControl, Lable } from "./Styled.Register";
import { useTranslation } from "react-i18next";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useForm } from "react-hook-form";
import { password } from "../../utils/regex";
import CountryCode from "./CountryCode";
import { Link } from "react-router-dom";
type Inputs = {
  username: string;
  password: string;
  age: string;
};
const Email = () => {
  const [showPass, setShowPass] = React.useState(false);
  const [Referral, setReferral] = React.useState(false);
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
            {t("Email")}
          </Lable>
          <div className="flex">
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
              className={`${
                t("direction") === "rtl" ? "left-5" : "right-5"
              }  cursor-pointer absolute top-3  dark:text-textGray`}
            >
              {showPass ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
        </FormControl>
        <FormControl>
          <div
            className="flex cursor-pointer items-center"
            onClick={() => setReferral(!Referral)}
          >
            <span className="dark:text-gray-50 mb-1">{t("Referral_ID")}</span>
            {Referral ? (
              <IoMdArrowDropup className="dark:text-gray-50" />
            ) : (
              <IoMdArrowDropdown className="dark:text-gray-50" />
            )}
          </div>
          {Referral && (
            <Input className={"ring-red-500 ring-2"} type="password" />
          )}
        </FormControl>
        <FormControl>
          <label className="inline-flex  items-center">
            <input type="checkbox" className="w-5 h-4 ltr:mr-3 rtl:ml-3" />
            <span className="text-sm mt-1 dark:text-gray-50">
              {t("Subscribe_To_Email_Updates")}
            </span>
          </label>
        </FormControl>
        <FormControl>
          <div className="sm:flex">
            <label htmlFor="" className="inline-flex items-center">
              <input
                {...register("age", { required: true })}
                type="checkbox"
                className="w-5 h-4 ltr:mr-3 rtl:ml-3"
              />
              {/* <span className="active:bg-primary-light  border border-gray-300  w-6 h-6 ltr:mr-3 rtl:ml-3 cursor-pointer" /> */}
              <span className="text-sm mt-1 dark:text-gray-50">
                {t("I_have_read_and_accept_the_rules_and_regulations")}
              </span>
            </label>

            <Link
              to="#"
              className="text-Link rtl:mr-2 ltr:ml-2 text-sm mt-1 block"
            >
              {t("Trems_of_Service")}
            </Link>
          </div>
          {errors.age && (
            <span className="text-red-500  mt-4 block">
              {t("I_am_over_18_age")}
            </span>
          )}
        </FormControl>
        <Button>{t("Login")}</Button>
      </form>
    </div>
  );
};

export default Email;

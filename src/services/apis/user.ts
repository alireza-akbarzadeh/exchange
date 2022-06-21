import { IResult } from "interfaces/apis/general";
import {
  CheckUserParams,
  CheckUserResult,
  EmailBody,
  LoginByAccountBody,
  LoginByAccountResult,
  LoginNormalResult,
  RegisterBody,
  RegisterResult,
  SucessResult,
  VerifyResendBody,
} from "interfaces/apis/user";
import { Http } from "services/https";

export const AuthApis = {
  checkUser: async ({
    email,
    mobile,
    username,
  }: CheckUserParams): Promise<CheckUserResult> => {
    try {
      const request = await Http.Request<IResult<CheckUserResult>>({
        url: "/users/auth/check_user",
        methodType: "GET",
        params: {
          email: email || undefined,
          mobile: mobile || undefined,
          username: username || undefined,
        },
      });

      return request.result;
    } catch {
      return null;
    }
  },

  registerUser: async ({
    email,
    password,
    registerType = "normal",
    mobile,
    username,
  }: RegisterBody): Promise<RegisterResult> => {
    const request = await Http.Request<IResult<RegisterResult>>({
      url: "/users/auth/register",
      methodType: "POST",
      payload: {
        email,
        password,
        registerType,
        mobile,
        username,
      },
    });

    return request.result;
  },
  loginUserNormal: async ({
    password,
    mobile,
    username,
    email,
  }: RegisterBody): Promise<LoginNormalResult> => {
    try {
      const request = await Http.Request<IResult<LoginNormalResult>>({
        url: "/users/auth/login",
        methodType: "post",
        payload: {
          password,
          registerType: "normal",
          mobile,
          email,
          username,
        },
      });

      return request.result;
    } catch {
      return null;
    }
  },
  loginUserOTP: async ({
    password,
    mobile,
    username,
  }: RegisterBody): Promise<LoginNormalResult> => {
    const request = await Http.Request<IResult<LoginNormalResult>>({
      url: "/users/login",
      methodType: "POST",
      payload: {
        password,
        registerType: "otp",
        mobile,
        username,
      },
    });

    return request.result;
  },
  loginUserAccount: async ({
    provider,
  }: LoginByAccountBody): Promise<LoginByAccountResult> => {
    const request = await Http.Request<IResult<LoginByAccountResult>>({
      url: "/users/auth/login_by_account",
      methodType: "POST",
      payload: { provider },
    });

    return request.result;
  },
  refreshToken: async ({
    provider,
  }: LoginByAccountBody): Promise<SucessResult> => {
    const request = await Http.Request<IResult<SucessResult>>({
      url: "/users/auth/login_by_account",
      methodType: "put",
      payload: { provider },
    });

    return request.result;
  },
  verifyCode: async ({
    email,
    code,
  }: VerifyResendBody): Promise<SucessResult> => {
    const request = await Http.Request<IResult<SucessResult>>({
      url: "/users/auth/verify",
      methodType: "put",
      payload: { email, code },
    });

    return request.result;
  },
  verify: async ({ email }: VerifyResendBody): Promise<SucessResult> => {
    const request = await Http.Request<IResult<SucessResult>>({
      url: "/users/verify/resend",
      methodType: "put",
      payload: { email },
    });

    return request.result;
  },
  forgotPassword: async ({ email }: EmailBody): Promise<SucessResult> => {
    const request = await Http.Request<IResult<SucessResult>>({
      url: "/users/auth/password/forgot",
      methodType: "put",
      payload: { email },
    });

    return request.result;
  },
  passwordCheck: async ({
    email,
    code,
    mobile,
  }: VerifyResendBody): Promise<SucessResult> => {
    const request = await Http.Request<IResult<SucessResult>>({
      url: "/users/auth/password/check_code",
      methodType: "get",
      payload: { email, code, mobile },
    });

    return request.result;
  },
};

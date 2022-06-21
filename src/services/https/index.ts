import { stringify } from "query-string";
import axios from "./axios";
export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

interface HeaderProps {
  Authorization?: string;
  formData?: any;
}

export interface IBodyRequest extends HeaderProps {
  methodType: Method;
  url: string;
  needAuth?: boolean;
  params?: any;
  payload?: any;
}
export const Http = {
  Request: async <A>({
    methodType,
    url,
    formData,
    params,
    payload,
    needAuth,
  }: IBodyRequest): Promise<A> => {
    return new Promise(async (resolve, reject) => {
      try {
        const query = params ? `?${stringify({ ...params })}` : "";

        let token = "";
        if (needAuth) {
          const tokenStr = "getToken()";
          token = "Bearer " + tokenStr;
          if (!tokenStr) {
            window.location.pathname = "/login";
          }
        }
        let headers: any = fillHeaderData({ Authorization: token, formData });

        let body = undefined;

        body = payload;

        if (formData) body = formData;

        const axiosConfig = {
          method: methodType,
          url: `${url}${query}`,
          data: body,
          headers,
          timeout: 60000,
        };
        axios(axiosConfig)
          .then(async (x) => {
            if (x.status === 200) {
              let response: any;
              const data = x.data;
              response = data;

              return resolve(response);
            }

            return reject(x);
          })
          .catch((e) => {
            console.log("get status Code", e);
            // if (
            //   e?.response?.code === 401 ||
            //   e?.code === 401 ||
            //   e?.response?.status === 401
            // ) {
            //   window.location.href = "/login";
            // }

            return reject(e);
          });
      } catch (e) {
        reject(e);
      }
    });
  },
};

const fillHeaderData = ({ Authorization, formData }: HeaderProps) => {
  return {
    "Content-Type": "application/json",
    Authorization,
    ...formData?.getHeaders(),
  };
};

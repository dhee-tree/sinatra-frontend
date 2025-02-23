import { api } from "@/components/signup/utils";
import Cookies from "js-cookie";

const login = (username: string, password: string) => {
  return api.post(
    {
      username,
      password,
    },
    "/api/auth/jwt/create/"
  );
};

const storeToken = (token: string, type: "access" | "refresh") => {
  Cookies.set(type + "Token", token);
};

const getAccessToken = () => {
  return Cookies.get("accessToken");
};

export const LoginActions = () => {
  return {
    login,
    storeToken,
    getAccessToken,
  };
};

import wretch from "wretch";
import { LoginActions } from "@/components/login/utils";

const fetchDetails = () => {
  const { getAccessToken } = LoginActions();
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

  return wretch(`${DOMAIN}/`)
    .auth(`Bearer ${getAccessToken()}`)
    .headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    });
};

export const Fetcher = <T>(url: string): Promise<T> => {
  return fetchDetails().get(url).json<T>();
};

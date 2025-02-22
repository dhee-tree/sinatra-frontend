import wretch from "wretch";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export const api = wretch(`${DOMAIN}`).accept("application/json").headers({
  "Content-Type": "application/json",
});

const registerUser = (
  first_name: string,
  last_name: string,
  middle_name: string,
  username: string,
  email: string,
  age: number,
  password: string,
  password2: string
) => {
  return api.post(
    {
      first_name,
      last_name,
      middle_name,
      username,
      email,
      age,
      password,
      password2,
    },
    "/api/user/signup"
  );
};

export const SignupActions = () => {
  return {
    registerUser,
  };
};

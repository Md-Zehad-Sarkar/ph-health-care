// "use server";

import { FieldValues } from "react-hook-form";
import { setAccessTokenCookies } from "./setAccessTokenCookies";
import { redirect } from "next/dist/server/api-utils";

export const loginUser = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // cache: "no-store",
      credentials: "include",
    }
  );
  const userInfo = await res.json();

  //access token set on cookies
  if (userInfo?.data?.accessToken) {
    setAccessTokenCookies(userInfo?.data?.accessToken, {
      redirect: "/dashboard",
    });
  }
  return userInfo;
};

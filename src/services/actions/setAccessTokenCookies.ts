"use server";
import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAccessTokenCookies = (token: string, option?: any) => {
  cookies().set(authKey, token);
  if (option && option?.redirect) {
    redirect(option?.redirect);
  }
};

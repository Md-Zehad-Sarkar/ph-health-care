import { authKey } from "@/constant/authKey";
import { decodeJwtToken } from "@/utls/jwt-decode";
import {
  getLocalStorage,
  removeLocalStorage,
  setToLocalStorage,
} from "@/utls/local-storage";

export const storeAuthUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getAuthUserInfo = () => {
  const userAccessToken: any = getLocalStorage(authKey);

  if (userAccessToken) {
    const userInfo: any = decodeJwtToken(userAccessToken);
    return {
      ...userInfo,
      role: userInfo?.role?.toLowerCase(),
    };
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const token = getLocalStorage(authKey);
  if (token) {
    return !!token;
  }
};

export const removeUser = () => {
  return removeLocalStorage(authKey);
};

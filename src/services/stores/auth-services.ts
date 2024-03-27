import { authKey } from "@/constant/authKey";
import { setToLocalStorage } from "@/utls/local-storage";

export const storeAuthUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

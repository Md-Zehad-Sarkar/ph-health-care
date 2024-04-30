import { authKey } from "@/constant/authKey";
import { decodeJwtToken } from "@/utls/jwt-decode";
import { getLocalStorage } from "@/utls/local-storage";
import { JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

const useUserInfo = (): any | string => {
  const [userInfo, setUserInfo] = useState<any | string>("");
  useEffect(() => {
    const fetchUserInfo = () => {
      const authToken = getLocalStorage(authKey);
      if (authToken) {
        const decodedData: JwtPayload & { role: any } = decodeJwtToken(
          authToken
        ) as JwtPayload & { role: any };
        const userInfo = {
          ...decodedData,
          role: decodedData?.role?.toLowerCase() || "",
        };
        setUserInfo(userInfo);
      } else {
        setUserInfo("");
      }
    };
    fetchUserInfo();
  }, []);

  return userInfo;
};

export default useUserInfo;

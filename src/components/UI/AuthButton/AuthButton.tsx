import { authKey } from "@/constant/authKey";
import { deleteCookies } from "@/services/actions/deleteCookie";
import { logoutUser } from "@/services/actions/logoutUser";
import { getAuthUserInfo, removeUser } from "@/services/stores/auth-services";
import { Button } from "@mui/material";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo: any = getAuthUserInfo();

  const handleLogout = () => {
    // removeUser();
    // localStorage.removeItem(authKey);
    // deleteCookies([authKey, "refreshToken"]);
    // router.push("/");
    // router.refresh();

    //.... log out user with remove local storage and cookies
    logoutUser(router);
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button onClick={handleLogout} color="error">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;

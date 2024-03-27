import { getAuthUserInfo, removeUser } from "@/services/stores/auth-services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AuthButton = () => {
    const router = useRouter();
    const userInfo:any = getAuthUserInfo();

    const handleLogout = () => {
      removeUser();
      router.refresh();
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
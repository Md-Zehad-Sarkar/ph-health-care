import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerMenuItems } from "@/utls/drawerMenuItems";
import { TUserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getAuthUserInfo } from "@/services/stores/auth-services";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getAuthUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        mt={1}
        py={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component="h2">
          PH Health Care
        </Typography>
      </Stack>
      <Box>
        <List>
          {drawerMenuItems(userRole as TUserRole).map((item, index) => (
            <SidebarItem key={index}  item={item} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;

import { IDrawerItem } from "@/types";
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { usePathname } from "next/navigation";

type TProps = {
  item: IDrawerItem;
};

const SidebarItem = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();
  console.log(linkPath);
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? { borderRight: "1px solid #1586FD" }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;

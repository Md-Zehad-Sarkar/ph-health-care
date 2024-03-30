import { UserRole } from "@/constant/userRole";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TUserRole = keyof typeof UserRole;

export interface IDrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: IDrawerItem[];
}

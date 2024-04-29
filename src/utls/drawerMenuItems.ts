import { UserRole } from "@/constant/userRole";
import { IDrawerItem, TUserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import TryIcon from "@mui/icons-material/Try";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MedicationIcon from "@mui/icons-material/Medication";
import PaymentIcon from "@mui/icons-material/Payment";
import KeyIcon from "@mui/icons-material/Key";

export const drawerMenuItems = (role: TUserRole) => {
  const roleMenus: IDrawerItem[] = [];

  const defaultMenuItem = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: GroupIcon,
    },
    {
      title: "Change Password",
      path: "change-password",
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case UserRole.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;
    case UserRole.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: TryIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );

      break;

    case UserRole.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        }
      );

      break;

    case UserRole.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: MedicationIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: PaymentIcon,
        }
      );

      break;

    default:
      break;
  }
  return [...roleMenus, ...defaultMenuItem];
};

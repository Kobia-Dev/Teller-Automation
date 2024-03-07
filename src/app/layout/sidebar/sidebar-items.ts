import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "./admin/dashboard/actors",
    title: "Dashboard",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  {
    path: "reports/mpesa-reports",
    title: "Reports",
    moduleName: "reports",
    iconType: "feather",
    icon: "credit-card",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },

  
]

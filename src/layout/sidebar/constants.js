import CategoryIcon from "@mui/icons-material/Category";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LogoutIcon from "@mui/icons-material/Logout";
import { routeNames } from "routes/constants";

export const sidebarItems = [
  {
    id: 1,
    title: "Categories",
    icon: <CategoryIcon />,
    route: routeNames.categories.route,
  },
  {
    id: 2,
    title: "Cars",
    icon: <DirectionsCarIcon />,
    route: routeNames.cars.route,
  },
  {
    id: 3,
    title: "Logout",
    icon: <LogoutIcon />,
    route: routeNames.login.route,
  },
];

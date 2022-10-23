import { routeNames } from "routes/constants";
import CategoryIcon from "@mui/icons-material/Category";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
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
    icon: <DirectionsCarIcon />,
    route: routeNames.login.route,
  },
];

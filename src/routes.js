import DefaultLayout from "./containers/DefaultLayout";
import Login from "./views/login";
import Page404 from "./views/Page404";
import Welcome from "./views/welcome";
import Home from "./views/Home/index.js";
import Navbar from "../src/navbar/index";
import Rent from "../src/views/movieCateggory/index"

const routes = [
  {
    path: "/",
    exact: true,
    name: "Default",
    component: DefaultLayout
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login
  },
  {
    path: "/navbar",
    exact: true,
    name: "navbar",
    component: Navbar
  },

  {
    path: "/ott/.com/",
    exact: true,
    name: "Welcome",
    component: Welcome
  },
  
  {
    path: "/New-To-Rent",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/New-To-Buy",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Pre-Order",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Movie-Box-Seats",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Official-Film-Chart",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Browse",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/A-To-Z",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Sky-Store-Premiere",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Sale",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Super-Hero-Savings",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Store-Picks",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Under-3",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Under-4",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Under-5",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Sky-Vip-Gifts",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Most-Popular",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/New-To-Store",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Drama",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Comedy",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Kids",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/All",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "",
    exact: true,
    name: "Page Not Found",
    component: Page404
  }
];

export default routes;

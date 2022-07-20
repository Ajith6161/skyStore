import DefaultLayout from "./containers/DefaultLayout";
import Login from "./views/login";
import Page404 from "./views/Page404";
import Welcome from "./views/welcome";
import Home from "./views/Home/index.js";
import Navbar from "../src/navbar/index";

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
    path: "/home",
    exact: true,
    name: "Home",
    component: Home
  },
  {
    path: "",
    exact: true,
    name: "Page Not Found",
    component: Page404
  }
];

export default routes;

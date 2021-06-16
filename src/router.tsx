import { Login, Player } from "./pages";

export interface IRoute {
  path: string;
  component: any;
  requiresAuth: boolean;
}

export const routes = {
  home: {
    path: "/"
  },
  login: {
    path: "/login"
  },
  player: {
    path: "/player"
  }
};

export const routerObject: IRoute[] = [
  {
    path: "/login",
    component: Login,
    requiresAuth: false
  },
  {
    path: "/",
    component: Login, //I will change to home,
    requiresAuth: false
  },
  {
    path: "/player",
    component: Player,
    requiresAuth: false
  }
];

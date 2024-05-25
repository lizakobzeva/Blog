import { CreatePostPage } from "pages/CreatePostPage";
import FullPostPage from "pages/FullPostPage/ui/FullPostPage";

import { MainPage } from "pages/MainPage";
import { NewPosts } from "pages/NewPosts";
import NotFoundPage from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  CREATEPOST = "createpost",
  NEWPOSTS = "newposts",
  FULLPOST = "fullpost",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CREATEPOST]: "/createpost",
  [AppRoutes.NEWPOSTS]: "/",
  [AppRoutes.FULLPOST]: "/fullpost",

  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Array<RouteProps> = [
  {
    path: RoutePath.newposts,
    element: <NewPosts />,
  },
  {
    path: RoutePath.fullpost,
    element: <FullPostPage />,
  },
  {
    path: RoutePath.createpost,
    element: <CreatePostPage />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];

import { CreatePostPage } from "pages/CreatePostPage";
import FullPostPage from "pages/FullPostPage/ui/FullPostPage";
import { LikedPostsPage } from "pages/LikedPostsPage";
import { NewPosts } from "pages/NewPosts";
import NotFoundPage from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  CREATEPOST = "createpost",
  NEWPOSTS = "newposts",
  FULLPOST = "fullpost",
  LIKEDPOSTS = "likedposts",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NEWPOSTS]: "/",
  [AppRoutes.CREATEPOST]: "/createpost",
  [AppRoutes.FULLPOST]: "/:id",
  [AppRoutes.LIKEDPOSTS]: "/likedposts",

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
    path: RoutePath.likedposts,
    element: <LikedPostsPage />,
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

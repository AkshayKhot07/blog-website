import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPostForm from "../components/BlogPostForm";
import NotFound from "../components/NotFound";
import { PrivateOutlet } from "../components/PrivateOutlet";
import BlogCategoryPosts from "../pages/blog-category-posts";
import BlogPostDetails from "../pages/blog-post-details";
import BlogTimeLinePosts from "../pages/blog-timeline-posts";
import Home from "../pages/home";

const routes = [
  {
    path: "/",
    element: <PrivateOutlet />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog/:id", element: <BlogPostDetails /> },
      { path: "blog/create-post", element: <BlogPostForm /> },
      { path: "blog/category/:category", element: <BlogCategoryPosts /> },
      { path: "blog/timeline/:year/:month", element: <BlogTimeLinePosts /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

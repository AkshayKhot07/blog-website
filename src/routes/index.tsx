import { Route, Routes } from "react-router-dom";
import BlogPostForm from "../components/BlogPostForm";
import NotFound from "../components/NotFound";
import { PrivateOutlet } from "../components/PrivateOutlet";
import BlogCategoryPosts from "../pages/blog-category-posts";
import BlogPostDetails from "../pages/blog-post-details";
import BlogTimeLinePosts from "../pages/blog-timeline-posts";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateOutlet />}>
        <Route index element={<Home />} />
        <Route path="blog/:id" element={<BlogPostDetails />} />
        <Route path="blog/create-post" element={<BlogPostForm />} />
        <Route path="blog/category/:category" element={<BlogCategoryPosts />} />
        <Route
          path="blog/timeline/:year/:month"
          element={<BlogTimeLinePosts />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;

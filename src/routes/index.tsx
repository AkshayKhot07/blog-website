import { Route, Routes } from "react-router-dom";
import BlogPostForm from "../components/BlogPostForm";
import { PrivateOutlet } from "../components/PrivateOutlet";
import BlogPostDetails from "../pages/blog-post-details";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateOutlet />}>
        <Route index element={<Home />} />
        <Route path="blog/:id" element={<BlogPostDetails />} />
        <Route path="blog/create-post" element={<BlogPostForm />} />
      </Route>
    </Routes>
  );
};

export default Router;

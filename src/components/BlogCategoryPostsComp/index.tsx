import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import { BlogHeroSecPostsCard } from "../BlogHeroSection/BlogHeroSecPosts";
import BlogCategoryNotFound from "./BlogCategoryNotFound";
import "./BlogCategoryPostsComp.css";

const BlogCategoryPostsComp = () => {
  const { category } = useParams();

  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error(
      "DisplayBlogPosts must be used within a BlogPostsContextProvider"
    );
  }
  const [blogPosts] = context;

  const currCategoryPosts = blogPosts?.filter(
    (post) => post.category === category
  );

  return (
    <div className="blog-category-grid">
      {currCategoryPosts &&
        currCategoryPosts?.length > 0 &&
        currCategoryPosts?.map((post) => (
          <BlogHeroSecPostsCard key={post.slug} post={post} />
        ))}
      {currCategoryPosts && currCategoryPosts?.length === 0 && (
        <BlogCategoryNotFound />
      )}
    </div>
  );
};

export default BlogCategoryPostsComp;

import { useContext } from "react";
import { BlogPostsContext } from "../../../context/BlogPostsContext";
import "./BlogHeroPost.css";

const BlogHeroPost = () => {
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error(
      "BlogPostForm must be used within a BlogPostsContextProvider"
    );
  }
  const [blogPosts] = context;

  const heroBlogPost = blogPosts[0];

  console.log("heroBlogPost", heroBlogPost);

  return (
    <div className="blog-hero-post-container">
      <div className="bg-hp-card">
        <h2 className="blog-hp-title">{heroBlogPost.title}</h2>
        <p className="blog-hp-desp">{heroBlogPost.desp}</p>
        <a href={`/blog/${heroBlogPost.title}`} className="blog-hp-details">
          <p>Continue reading...</p>
        </a>
      </div>
    </div>
  );
};

export default BlogHeroPost;

import { useContext, useState } from "react";
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

  // Sort posts by date descending initially
  const [blogPostsNew] = useState(() =>
    [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  const heroBlogPost = blogPostsNew[0];

  return (
    <div className="blog-hero-post-container">
      <div className="bg-hp-card">
        <h2 className="blog-hp-title">{heroBlogPost.title}</h2>
        <p className="blog-hp-desp">{heroBlogPost.desp}</p>
        <a href={`/blog/${heroBlogPost.slug}`} className="blog-hp-details">
          <p>Continue reading...</p>
        </a>
      </div>
    </div>
  );
};

export default BlogHeroPost;

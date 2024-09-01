import { useContext } from "react";
import {
  BlogPostsContext,
  BlogPostType,
} from "../../../context/BlogPostsContext";
import "./BlogHeroSecPosts.css";

const BlogHeroSecPosts = () => {
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error(
      "BlogPostForm must be used within a BlogPostsContextProvider"
    );
  }
  const [blogPosts] = context;

  const blogHeroSecPosts = blogPosts.slice(1, 3);

  console.log("blogHeroSecPosts", blogHeroSecPosts);

  return (
    <div className="blog-hsp-card-container">
      {blogHeroSecPosts?.map((post) => {
        return <BlogHeroSecPostsCard key={post.title} post={post} />;
      })}
    </div>
  );
};

export default BlogHeroSecPosts;

const BlogHeroSecPostsCard = ({ post }: { post: BlogPostType }) => {
  return (
    <div className="blog-hsp-card">
      <div className="blog-hsp-card-content">
        <p className="blog-hsp-card-content-category">{post.category}</p>
        <div>
          <h4>{post.title}</h4>
          <p>{post.date}</p>
        </div>
        <p>{post.desp}</p>
        <a href={`/blog/${post.title}`} className="blog-hsp-details">
          <p>Continue reading</p>
        </a>
      </div>
      <div className="blog-hsp-card-thumb">
        <p>Thumbnail</p>
      </div>
    </div>
  );
};

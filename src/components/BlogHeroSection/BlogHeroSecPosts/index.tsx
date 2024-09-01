import { useContext, useState } from "react";
import {
  BlogPostsContext,
  BlogPostType,
} from "../../../context/BlogPostsContext";
import { formatDateString } from "../../../utils/formatDateString";
import "./BlogHeroSecPosts.css";

const BlogHeroSecPosts = () => {
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts] = context;

  // Sort posts by date descending initially
  const [blogPostsNew] = useState(() =>
    [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  const blogHeroSecPosts = blogPostsNew.slice(1, 3);

  return (
    <div className="blog-hsp-card-container">
      {blogHeroSecPosts?.map((post) => {
        return <BlogHeroSecPostsCard key={post.title} post={post} />;
      })}
    </div>
  );
};

export default BlogHeroSecPosts;

export const BlogHeroSecPostsCard = ({ post }: { post: BlogPostType }) => {
  return (
    <div className="blog-hsp-card">
      <div className="blog-hsp-card-content">
        <a
          href={`/blog/category/${post.category}`}
          className="blog-hsp-card-content-category"
        >
          <p>{post.category}</p>
        </a>
        <div>
          <h4>{post.title}</h4>
          <p>{formatDateString(post.date)}</p>
        </div>
        <p>{post.desp}</p>
        <a href={`/blog/${post.slug}`} className="blog-hsp-details">
          <p>Continue reading</p>
        </a>
      </div>
      <div className="blog-hsp-card-thumb">
        <p>Thumbnail</p>
      </div>
    </div>
  );
};

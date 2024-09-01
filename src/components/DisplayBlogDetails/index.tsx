import { BlogPostType } from "../../context/BlogPostsContext";
import "./DisplayBlogDetails.css";

const DisplayBlogDetails = ({ post }: { post: BlogPostType }) => {
  return (
    <div className="blog-details-container">
      <div className="blog-details-content">
        <div>
          <h2 className="blog-details-title">{post.title}</h2>
          <p>
            <span className="blog-details-date">{post.date} </span>
            <span> | </span>
            <span className="blog-details-category">{post.category}</span>
          </p>
        </div>

        <p className="blog-details-desp">{post.desp}</p>

        <p className="blog-details-content">{post.content}</p>
      </div>
    </div>
  );
};

export default DisplayBlogDetails;

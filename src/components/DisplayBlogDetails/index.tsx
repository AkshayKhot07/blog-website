import { useLocation } from "react-router-dom";
import { BlogPostType } from "../../context/BlogPostsContext";
import { formatDateString } from "../../utils/formatDateString";
import "./DisplayBlogDetails.css";

const DisplayBlogDetails = ({ post }: { post: BlogPostType }) => {
  const location = useLocation();

  return (
    <div className="blog-details-container">
      <div className="blog-details-content">
        <div>
          <a href={`/blog/${post.slug}`} className="blog-details-anchor">
            <h2 className="blog-details-title">{post.title}</h2>
            {location.pathname === "/" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "20px",
                  height: "fit-content",
                }}
              >
                <g id="Interface / External_Link">
                  <path
                    id="Vector"
                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            )}
          </a>
          <p>
            <span className="blog-details-date">
              {formatDateString(post.date)} by{" "}
            </span>
            <span className="blog-details-category">{post?.author}</span>
          </p>
        </div>

        <p className="blog-details-desp">{post.desp}</p>

        <p className="blog-details-content">{post.content}</p>
      </div>
    </div>
  );
};

export default DisplayBlogDetails;

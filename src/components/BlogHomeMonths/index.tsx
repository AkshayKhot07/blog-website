import { useContext } from "react";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import { categorizePostsByYearAndMonth } from "../../utils/categorizePostsByMonths";
import "./BlogHomeMonths.css";
import PostsByYearAndMonth from "./PostsByYearAndMonth";

const BlogHomeMonths = () => {
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts] = context;

  const blogPostsByYearAndMonth = categorizePostsByYearAndMonth(blogPosts);

  return (
    <div>
      <About />
      <div className="postby-year-month-cont">
        <PostsByYearAndMonth posts={blogPostsByYearAndMonth} />
      </div>
    </div>
  );
};

export default BlogHomeMonths;

const About = () => {
  return (
    <div className="about-container">
      <p className="about-title">About</p>
      <p className="about-desp">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        veniam nostrum culpa!
      </p>
    </div>
  );
};

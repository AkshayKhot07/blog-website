import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import { categorizePostsByYearAndMonth } from "../../utils/categorizePostsByMonths";
import { getPostsByYearAndMonth } from "../../utils/getPostsByYearAndMonth";
import { BlogHeroSecPostsCard } from "../BlogHeroSection/BlogHeroSecPosts";
import "./BlogTimelinePostsComp.css";

const BlogTimeLinePostsComp = () => {
  const { year, month } = useParams();

  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts] = context;

  const blogPostsByYearAndMonth = categorizePostsByYearAndMonth(blogPosts);

  const currYearAndMonthBlogPosts = getPostsByYearAndMonth({
    posts: blogPostsByYearAndMonth,
    year: year || "",
    month: month || "",
  });

  return (
    <div className="blog-post-timeline-grid">
      {currYearAndMonthBlogPosts &&
        currYearAndMonthBlogPosts?.length > 0 &&
        currYearAndMonthBlogPosts?.map((post) => (
          <BlogHeroSecPostsCard key={post.slug} post={post} />
        ))}
    </div>
  );
};

export default BlogTimeLinePostsComp;

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import { categorizePostsByYearAndMonth } from "../../utils/categorizePostsByMonths";
import { getPostsByYearAndMonth } from "../../utils/getPostsByYearAndMonth";
import { getYearsAndMonths } from "../../utils/getYearsAndMonths";
import { BlogHeroSecPostsCard } from "../BlogHeroSection/BlogHeroSecPosts";
import NotFound from "../NotFound";
import "./BlogTimelinePostsComp.css";

const BlogTimeLinePostsComp = () => {
  const { year, month } = useParams();

  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts] = context;

  const blogPostsByYearAndMonth = categorizePostsByYearAndMonth(blogPosts);

  const { years: getYearsFromPosts, months: getMonthsFromPosts } =
    getYearsAndMonths(blogPostsByYearAndMonth);

  const isYearPresent = getYearsFromPosts.includes(String(year));
  const isMonthPresent = getMonthsFromPosts.includes(String(month));

  const currYearAndMonthBlogPosts = getPostsByYearAndMonth({
    posts: blogPostsByYearAndMonth,
    year: year || "",
    month: month || "",
  });

  return (
    <>
      <div className="blog-post-timeline-grid">
        {isYearPresent &&
          isMonthPresent &&
          currYearAndMonthBlogPosts &&
          currYearAndMonthBlogPosts?.length > 0 &&
          currYearAndMonthBlogPosts?.map((post) => (
            <BlogHeroSecPostsCard key={post.slug} post={post} />
          ))}
      </div>
      {(!isYearPresent || !isMonthPresent) && <NotFound />}
    </>
  );
};

export default BlogTimeLinePostsComp;

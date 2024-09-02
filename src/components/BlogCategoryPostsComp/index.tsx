import { useContext } from "react";
import { useParams } from "react-router-dom";
import { blogCategoryList } from "../../constants/data";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import { BlogHeroSecPostsCard } from "../BlogHeroSection/BlogHeroSecPosts";
import NotFound from "../NotFound";
import BlogCategoryNotFound from "./BlogCategoryNotFound";
import "./BlogCategoryPostsComp.css";

const BlogCategoryPostsComp = () => {
  const { category } = useParams();

  const isFromCategoryList = blogCategoryList.includes(String(category));

  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts] = context;

  const currCategoryPosts = blogPosts?.filter(
    (post) => post.category === category
  );

  return (
    <>
      <div className="blog-category-grid">
        {currCategoryPosts &&
          currCategoryPosts?.length > 0 &&
          currCategoryPosts?.map((post) => (
            <BlogHeroSecPostsCard key={post.slug} post={post} />
          ))}
        {isFromCategoryList &&
          currCategoryPosts &&
          currCategoryPosts?.length === 0 && <BlogCategoryNotFound />}
      </div>
      {!isFromCategoryList && <NotFound />}
    </>
  );
};

export default BlogCategoryPostsComp;

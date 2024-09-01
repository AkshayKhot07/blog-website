import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import DisplayBlogDetails from "../DisplayBlogDetails";

const BlogPostDetailsPageComp = () => {
  const { id } = useParams();

  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts] = context;

  const currBlogPost = blogPosts?.filter((post) => post.slug === id)[0];

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <DisplayBlogDetails post={currBlogPost} />
    </div>
  );
};

export default BlogPostDetailsPageComp;

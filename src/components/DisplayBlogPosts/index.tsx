import { useContext } from "react";
import { BlogPostsContext } from "../../context/BlogPostsContext";

const DisplayBlogPosts = () => {
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error(
      "BlogPostForm must be used within a BlogPostsContextProvider"
    );
  }
  const [blogPosts] = context;

  console.log("blogPosts", blogPosts);

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {blogPosts &&
          blogPosts?.length > 0 &&
          blogPosts?.map((post) => <div key={post.title}>{post.title}</div>)}
      </div>
    </div>
  );
};

export default DisplayBlogPosts;

import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import DisplayBlogDetails from "../DisplayBlogDetails";
import "./DisplayBlogPosts.css";

const DisplayBlogPosts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error(
      "DisplayBlogPosts must be used within a BlogPostsContextProvider"
    );
  }
  const [blogPosts] = context;

  // Sort posts by date descending initially
  const [blogPostsNew, setBlogPostsNew] = useState(() =>
    [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  const [visibleCount, setVisibleCount] = useState(2);

  const handleSortByDate = (type: string) => {
    const currentSort = searchParams.get("sort");
    if (currentSort !== type) {
      setVisibleCount(2);
    }

    setSearchParams({ sort: type });
    const sortedPosts = [...blogPostsNew].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return type === "asc" ? dateA - dateB : dateB - dateA;
    });
    setBlogPostsNew(sortedPosts);
  };

  const sort = searchParams.get("sort");

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const postsToShow = blogPostsNew.slice(0, visibleCount);
  const hasMorePosts = visibleCount < blogPostsNew.length;

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {postsToShow &&
          postsToShow.length > 0 &&
          postsToShow.map((post) => (
            <DisplayBlogDetails key={post.title} post={post} />
          ))}
      </div>

      {hasMorePosts && (
        <button
          type="button"
          className="show-more-btn"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}

      <div className="sort-blog-posts">
        <button
          style={{
            borderColor: sort === "asc" ? "#3457d5" : "#989898",
            color: sort === "asc" ? "#3457d5" : "#989898",
          }}
          type="button"
          onClick={() => handleSortByDate("asc")}
        >
          Older
        </button>
        <button
          style={{
            borderColor: sort === "desc" ? "#3457d5" : "#989898",
            color: sort === "desc" ? "#3457d5" : "#989898",
          }}
          type="button"
          onClick={() => handleSortByDate("desc")}
        >
          Newer
        </button>
      </div>
    </div>
  );
};

export default DisplayBlogPosts;

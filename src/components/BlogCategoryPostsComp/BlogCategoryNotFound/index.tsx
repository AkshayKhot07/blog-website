import { useParams } from "react-router-dom";

const BlogCategoryNotFound = () => {
  const { category } = useParams();

  return (
    <>
      <p>
        Posts for{" "}
        <span
          style={{
            color: "#3457d5",
            fontWeight: "bold",
          }}
        >
          {`"${category}"` || ""}
        </span>{" "}
        Category Not Found
      </p>
    </>
  );
};

export default BlogCategoryNotFound;

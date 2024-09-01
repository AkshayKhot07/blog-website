import { useParams } from "react-router-dom";
import { blogCategoryList } from "../../constants/data";
import "./BlogCategoryList.css";

const BlogCategoryList = () => {
  const { category: paramsCategory } = useParams();

  return (
    <ul className="blog-category-container">
      {blogCategoryList.map((category) => (
        <li className="blog-category-list" key={category}>
          <a
            style={{
              color: paramsCategory === category ? "#3457d5" : "#808080",
            }}
            href={`/blog/category/${category}`}
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogCategoryList;

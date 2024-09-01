import { CategorizedPosts } from "../../../utils/categorizePostsByMonths";
import "./PostsByYearAndMonth.css";

const PostsByYearAndMonth = ({ posts }: { posts: CategorizedPosts }) => {
  return (
    <div>
      {Object.entries(posts).map(([year, months]) => (
        <div key={year}>
          <h4>{year}</h4>
          {Object.entries(months).map(([month, posts]) => (
            <div key={month}>
              <a
                href={`/blog/timeline/${year}/${month}`}
                className="blog-year-month-anchor"
              >
                <p className="blog-year-month">
                  {month} {year}
                </p>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostsByYearAndMonth;

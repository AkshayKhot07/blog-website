import { CategorizedPosts } from "./categorizePostsByMonths";

export function getPostsByYearAndMonth({
  posts,
  year,
  month,
}: {
  posts: CategorizedPosts;
  year: string;
  month: string;
}) {
  if (posts[year] && posts[year][month]) {
    return posts[year][month];
  }
  return [];
}

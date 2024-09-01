import { BlogPostType } from "../context/BlogPostsContext";

// Define the type for the categorized posts object
export type CategorizedPosts = {
  [year: string]: {
    [month: string]: BlogPostType[];
  };
};

export function categorizePostsByYearAndMonth(
  posts: BlogPostType[]
): CategorizedPosts {
  return posts.reduce<CategorizedPosts>((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const monthName = date.toLocaleString("default", { month: "long" });

    if (!acc[year]) {
      acc[year] = {};
    }

    if (!acc[year][monthName]) {
      acc[year][monthName] = [];
    }

    // Push the post into the appropriate month array
    acc[year][monthName].push({
      title: post.title,
      date: post.date,
      desp: post.desp,
      content: post.content,
      category: post.category,
      author: post.author,
      slug: post.slug,
    });

    return acc;
  }, {});
}

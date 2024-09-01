import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { blogPostsDummyData } from "../../constants/data";

export type BlogPostType = {
  title: string;
  date: string;
  desp: string;
  content: string;
  category: string;
  author: string;
  slug: string;
};

type BlogPostsContextType = [
  BlogPostType[],
  Dispatch<SetStateAction<BlogPostType[]>>
];

const BlogPostsContext = createContext<BlogPostsContextType | undefined>(
  undefined
);

const BlogPostsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts && storedPosts.length > 0) {
      return JSON.parse(storedPosts) as BlogPostType[];
    } else {
      return blogPostsDummyData;
    }
  });

  // Update localStorage whenever blogPosts changes
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
  }, [blogPosts]);

  return (
    <BlogPostsContext.Provider value={[blogPosts, setBlogPosts]}>
      {children}
    </BlogPostsContext.Provider>
  );
};

export { BlogPostsContext, BlogPostsContextProvider };

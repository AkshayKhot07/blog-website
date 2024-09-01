import { createContext, Dispatch, SetStateAction, useState } from "react";
import { blogPostsDummyData } from "../../constants/data";

export type BlogPostType = {
  title: string;
  date: string;
  desp: string;
  content: string;
  category: string;
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
  const state = useState<BlogPostType[]>(blogPostsDummyData);

  return (
    <BlogPostsContext.Provider value={state}>
      {children}
    </BlogPostsContext.Provider>
  );
};

export { BlogPostsContext, BlogPostsContextProvider };

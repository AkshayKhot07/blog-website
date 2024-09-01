import BlogCategoryList from "../BlogCategoryList";
import BlogHeroSection from "../BlogHeroSection";
import BlogHomeMonths from "../BlogHomeMonths";
import DisplayBlogPosts from "../DisplayBlogPosts";
import "./HomeComponent.css";

const HomeComponent = () => {
  return (
    <>
      <BlogCategoryList />
      <BlogHeroSection />
      <div className="blog-home-midsec">
        <div className="blog-home-midsec-posts">
          <DisplayBlogPosts />
        </div>
        <div className="blog-home-midsec-months">
          <BlogHomeMonths />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;

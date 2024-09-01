import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BlogPostsContextProvider } from "./context/BlogPostsContext";
import Router from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <BlogPostsContextProvider>
          <Router />
        </BlogPostsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

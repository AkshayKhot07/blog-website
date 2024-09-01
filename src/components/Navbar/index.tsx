import { useLocation } from "react-router-dom";
import "../../Layout/Layout.css";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="container navbar-container">
      <div
        className="nav-sub"
        style={{
          display:
            location?.pathname === "/blog/create-post" ? "none" : "block",
        }}
      >
        Subscribe
      </div>
      <div className="nav-title">
        <a href="/">
          <p>Large</p>
        </a>
      </div>
      <div
        className="nav-create-post"
        style={{
          display:
            location?.pathname === "/blog/create-post" ? "none" : "block",
        }}
      >
        <a href="/blog/create-post">
          <button type="button">Create Post</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

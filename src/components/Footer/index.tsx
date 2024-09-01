import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <p>
        Blog template for
        <span className="text-blue"> Bootstrap </span>
        by
        <span className="text-blue"> @mdo.</span>
      </p>
      <p
        className="text-blue"
        onClick={handleScrollToTop}
        style={{ cursor: "pointer" }}
      >
        Back to top
      </p>
    </footer>
  );
};

export default Footer;

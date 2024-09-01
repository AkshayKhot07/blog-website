import { useContext, useState } from "react";
import { BlogPostsContext } from "../../context/BlogPostsContext";

interface FormInitialValuesTypes {
  title: string;
  date: string;
  desp: string;
  content: string;
  category: string;
}

const formInitialValues = {
  title: "",
  date: "",
  desp: "",
  content: "",
  category: "",
};

const BlogPostForm = () => {
  const context = useContext(BlogPostsContext);
  if (!context) {
    throw new Error(
      "BlogPostForm must be used within a BlogPostsContextProvider"
    );
  }
  const [blogPosts, setBlogPosts] = context;

  const [formData, setFormData] =
    useState<FormInitialValuesTypes>(formInitialValues);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
      console.log(formData);
      setBlogPosts([...blogPosts, formData]);
      setFormData(formInitialValues);
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.title.trim()) {
      errors.title = "Title is required";
    } else if (data.title.length < 4) {
      errors.title = "Title must be at least 4 characters long";
    }

    if (!data.date.trim()) {
      errors.date = "date is required";
    } else if (data.date.length < 4) {
      errors.date = "date must be at least 4 characters long";
    }

    if (!data.desp.trim()) {
      errors.desp = "desp is required";
    } else if (data.desp.length < 4) {
      errors.desp = "desp must be at least 4 characters long";
    }

    if (!data.content.trim()) {
      errors.content = "content is required";
    } else if (data.content.length < 4) {
      errors.content = "content must be at least 4 characters long";
    }

    if (!data.category.trim()) {
      errors.category = "category is required";
    } else if (data.category.length < 4) {
      errors.category = "category must be at least 4 characters long";
    }

    return errors;
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">title:</label>
          <input
            className="form-input"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>
        <div>
          <label className="form-label">date:</label>
          <input
            className="form-input"
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>
        <div>
          <label className="form-label">desp:</label>
          <input
            className="form-input"
            type="text"
            name="desp"
            value={formData.desp}
            onChange={handleChange}
          />
          {errors.desp && <span className="error-message">{errors.desp}</span>}
        </div>
        <div>
          <label className="form-label">Content:</label>
          <input
            className="form-input"
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
          {errors.content && (
            <span className="error-message">{errors.content}</span>
          )}
        </div>
        <div>
          <label className="form-label">Category:</label>
          <input
            className="form-input"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category && (
            <span className="error-message">{errors.category}</span>
          )}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import "./BlogPostForm.css";

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
  const navigate = useNavigate();

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
      navigate("/");
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
      errors.date = "Date is required";
    }

    if (!data.desp.trim()) {
      errors.desp = "Description is required";
    } else if (data.desp.length < 10) {
      errors.desp = "Description must be at least 10 characters long";
    }

    if (!data.content.trim()) {
      errors.content = "Content is required";
    } else if (data.content.length < 20) {
      errors.content = "Content must be at least 20 characters long";
    }

    if (!data.category.trim()) {
      errors.category = "Category is required";
    } else if (
      !["World", "Technology", "Design", "Culture", "Business"].includes(
        data.category
      )
    ) {
      errors.category = "Please select a valid category";
    }

    return errors;
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Create a Blog Post</h2>
        <form onSubmit={handleSubmit} className="form-element">
          <div>
            <label className="form-label">Title:</label>
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
            <label className="form-label">Date:</label>
            <input
              className="form-input"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && (
              <span className="error-message">{errors.date}</span>
            )}
          </div>
          <div>
            <label className="form-label">Description:</label>
            <textarea
              className="form-input form-input-desp"
              rows={4}
              name="desp"
              value={formData.desp}
              onChange={handleChange}
            />
            {errors.desp && (
              <span className="error-message">{errors.desp}</span>
            )}
          </div>
          <div>
            <label className="form-label">Content:</label>
            <textarea
              className="form-input form-input-content"
              rows={10}
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
            <select
              className="form-input"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="World">World</option>
              <option value="Technology">Technology</option>
              <option value="Design">Design</option>
              <option value="Culture">Culture</option>
              <option value="Business">Business</option>
            </select>
            {errors.category && (
              <span className="error-message">{errors.category}</span>
            )}
          </div>
          <div className="submit-button-container">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="form-instruction">
        <p>Writing a Great Post Title</p>
        <ul>
          <li>
            Think of your post title as a super short (but compelling!)
            description — like an overview of the actual post in one short
            sentence.
          </li>
          <li>
            Use keywords where appropriate to help ensure people can find your
            post by search.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogPostForm;

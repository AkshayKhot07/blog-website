import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { blogCategoryList } from "../../constants/data";
import { BlogPostsContext } from "../../context/BlogPostsContext";
import { createSlug } from "../../utils/createSlug";
import "./BlogPostForm.css";
interface FormInitialValuesTypes {
  title: string;
  author: string;
  date: string;
  desp: string;
  content: string;
  category: string;
  slug: string;
}

interface FormErrors {
  title?: string;
  author?: string;
  date?: string;
  desp?: string;
  content?: string;
  category?: string;
}

const formInitialValues = {
  title: "",
  author: "",
  date: "",
  desp: "",
  content: "",
  category: "",
  slug: "",
};

const BlogPostForm = () => {
  const context = useContext(BlogPostsContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Context is null or undefined");
  }
  const [blogPosts, setBlogPosts] = context;

  const [formData, setFormData] =
    useState<FormInitialValuesTypes>(formInitialValues);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Form submitted successfully!", {
        duration: 4000,
        position: "top-center",
      });
      // console.log("Form submitted successfully!");
      setBlogPosts([
        ...blogPosts,
        { ...formData, slug: createSlug(formData.title) },
      ]);
      navigate("/");
      setFormData(formInitialValues);
    } else {
      toast.error("Form submission failed due to validation errors.");
      console.error("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data: FormInitialValuesTypes): FormErrors => {
    const errors: FormErrors = {};

    if (!data.title.trim()) {
      errors.title = "Title is required";
    } else if (data.title.length < 4) {
      errors.title = "Title must be at least 4 characters long";
    }

    if (!data.author.trim()) {
      errors.author = "Author is required";
    } else if (data.author.length < 4) {
      errors.author = "Author must be at least 4 characters long";
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
    } else if (!blogCategoryList.includes(data.category)) {
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
            <label className="form-label">Author:</label>
            <input
              className="form-input"
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
            {errors.author && (
              <span className="error-message">{errors.author}</span>
            )}
          </div>
          <div>
            <label className="form-label">Date:</label>
            <input
              className="form-input"
              type="datetime-local"
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
              {blogCategoryList?.map((item) => (
                <option value={item}>{item}</option>
              ))}
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

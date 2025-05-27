import { useState } from "react";
import "./CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Supabase integration later
    console.log({ title, body });
  };

  return (
    <main>
      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Content</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="10"
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </main>
  );
};

export default CreateBlog;

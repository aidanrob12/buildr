import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    const { data } = await supabase.from("blogs").select();
    setBlogs(data);
  }

  return (
    <>
      <header>
        <h1>Aidan's Blog</h1>
      </header>

      <main>
        {blogs.map((blog) => (
          <article key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </article>
        ))}
      </main>
    </>
  );
}

export default Blog;

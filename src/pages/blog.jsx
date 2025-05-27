import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./blog.css";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

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

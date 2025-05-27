import { Routes, Route } from "react-router";
import Blog from "./pages/blog";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </>
  );
}

export default App;

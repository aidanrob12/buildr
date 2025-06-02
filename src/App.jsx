import { Routes, Route } from "react-router";
import Blog from "./pages/Blog/Blog";
import CreateBlog from "./pages/CreateBlog/CreateBlog";

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

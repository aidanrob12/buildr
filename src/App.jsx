import { Routes, Route } from "react-router";
import Blog from "./pages/Blog/Blog";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";

function App() {
  const [blogs, setBlogs] = useState<string[]>([]);

  return (
    <>
      <h1>Plant blog for plant lovers</h1>
      

      <BlogForm onSubmit={(text) => setBlogs([...blogs, text])} />

      <ul>
        {blogs.map((blog) => (
          <li key={blog}>{blog}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

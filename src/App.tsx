import { useState } from "react";
import "./App.css";
import BlogForm, { Post } from "./components/BlogForm";
import BlogList from "./components/BlogList";

function App() {
  const [blogs, setBlogs] = useState<Post[]>([]);

  function handleSubmit(post: Post) {
    setBlogs((prevBlogs) => [...prevBlogs, post]);
  }

  return (
    <>
      <h1>Plant blog for plant lovers</h1>

      <BlogForm onSubmit={handleSubmit} />
      <BlogList blogs={blogs} />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

function App() {
  const [blogs, setBlogs] = useState<string[]>([]);

  function handleSubmit(text: string) {
    setBlogs((prevBlogs) => [...prevBlogs, text]);
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

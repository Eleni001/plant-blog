import { useState } from "react";
import "./App.css";
import BlogForm, { Post } from "./components/BlogForm";
import BlogList from "./components/BlogList";

function App() {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [editPost, setEditPost] = useState<Post | undefined>(undefined);

  function handleSubmit(post: Post) {
    if (post.id !== undefined) {
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog.id === post.id ? post : blog))
      );
    } else {
      setBlogs([...blogs, { ...post, id: Date.now() }]);
    }
    setEditPost(undefined);
  }
  const handleEdit = (post: Post) => {
    setEditPost(post);
  };

  return (
    <>
      <h1>Plant blog for plant lovers</h1>

      <BlogForm onSubmit={handleSubmit} editPost={editPost} />
      <BlogList blogs={blogs} onEdit={handleEdit} />
    </>
  );
}

export default App;

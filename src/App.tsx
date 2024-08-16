import { Box, Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import BlogForm, { Post } from "./components/BlogForm";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <Box minH="60vh">
        <Center p={8}>
          <Heading as="h1" /* pl="35vw" pt="5vh" */>
            Plant blog for plant lovers
          </Heading>
        </Center>
        <BlogForm onSubmit={handleSubmit} editPost={editPost} />
        <BlogList blogs={blogs} onEdit={handleEdit} />
      </Box>
      <Footer />
    </>
  );
}

export default App;

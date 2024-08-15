import { FormEvent, useEffect, useState } from "react";

export interface Post {
  id?: number;
  title: string;
  content: string;
}

interface Props {
  onSubmit: (post: Post) => void;
  editPost?: Post;
}

export default function BlogForm({ onSubmit, editPost }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setContent(editPost.content);
    }
  }, [editPost]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ ...editPost, title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="enter blog title ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        placeholder="enter blog content ..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button>Save</button>
    </form>
  );
}

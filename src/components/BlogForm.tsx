import { FormEvent, useState } from "react";

export interface Post {
  id?: number;
  title: string;
  content: string;
}

interface Props {
  onSubmit: (post: Post) => void;
}

export default function BlogForm(props: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit({ title, content });
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

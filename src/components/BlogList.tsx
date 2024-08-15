import { Post } from "./BlogForm";

interface Props {
  blogs: Post[];
  onEdit: (post: Post) => void;
}

export default function BlogList({ blogs, onEdit }: Props) {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.title}>
          <div>{blog.title}</div>
          <div>{blog.content}</div>
          <button onClick={() => onEdit(blog)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

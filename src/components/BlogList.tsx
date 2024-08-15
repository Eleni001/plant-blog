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
          {blog.title}
          {blog.content}
          <button onClick={() => onEdit(blog)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

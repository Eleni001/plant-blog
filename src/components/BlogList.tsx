import { Post } from "./BlogForm";

interface Props {
  blogs: Post[];
}

export default function BlogList(props: Props) {
  return (
    <ul>
      {props.blogs.map((blog) => (
        <li key={blog.title}>
          {blog.title}
          {blog.content}
        </li>
      ))}
    </ul>
  );
}

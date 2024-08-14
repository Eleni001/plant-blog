interface Props {
  blogs: string[];
}

export default function BlogList(props: Props) {
  return (
    <ul>
      {props.blogs.map((blog) => (
        <li key={blog}>{blog}</li>
      ))}
    </ul>
  );
}



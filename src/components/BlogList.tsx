import { VStack, Heading, Button, Text } from "@chakra-ui/react";
import { Post } from "./BlogForm";

interface Props {
  blogs: Post[];
  onEdit: (post: Post) => void;
}

export default function BlogList({ blogs, onEdit }: Props) {
  return (
    <VStack p="5vh" pl="20vw" spacing="2" alignItems="flex-start">
      {blogs.length > 0 && (
        <Heading as="h2">What we write about</Heading>
      )}
      {blogs.map((blog) => (
        <VStack key={blog.title} spacing="1" alignItems="flex-start">
          <Text as="h3" fontSize="lg" fontWeight="bold">
            {blog.title}
          </Text>
          <Text as="p" fontSize="md">
            {blog.content}
          </Text>
          <Button size="sm" onClick={() => onEdit(blog)}>
            Edit
          </Button>
        </VStack>
      ))}
    </VStack>
  );
}

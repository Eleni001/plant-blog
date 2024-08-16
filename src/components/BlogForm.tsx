import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box
} from "@chakra-ui/react";
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
    <Box
      as="form"
      onSubmit={handleSubmit}
      padding="4"
      maxWidth="500px"
      margin="0 auto"
    >
      <VStack spacing="4">
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            type="text"
            placeholder="enter blog title ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea
            name="content"
            placeholder="enter blog content ..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Save
        </Button>
      </VStack>
    </Box>
  );
}

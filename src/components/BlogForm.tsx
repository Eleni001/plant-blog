import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
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
    if (title && content) {
      onSubmit({ ...editPost, title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    
    <Box
      as="form"
      onSubmit={handleSubmit}
      padding="4"
      maxWidth="500px"
      margin="0 auto"
      rounded={'lg'}
      bg={useColorModeValue('rgb(195, 206, 232)', 'gray.700')}
      boxShadow={'lg'}
      p={8}>
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
        <Button
          type="submit"
          aria-label="save"
          colorScheme="teal"
          isDisabled={!title || !content}
        >
          Save
        </Button>
      </VStack>
    </Box>
  );
}

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { Post } from "./components/BlogForm";
import BlogList from "./components/BlogList";

describe("App", () => {
  it("should be possible to add a post", async () => {
    render(<App />);

    const postTitle = "Must have plants";
    fireEvent.input(screen.getByPlaceholderText("enter blog title ..."), {
      target: { value: postTitle },
    });
    const postContent = "These are the top ten must have plants.";
    fireEvent.input(screen.getByPlaceholderText("enter blog content ..."), {
      target: { value: postContent },
    });

    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(postTitle));

    expect(screen.getByText(postContent));
  });

  it("should be possible to add multiple posts", () => {
    render(<App />);

    const postTitle = "Must have plants";
    fireEvent.input(screen.getByPlaceholderText("enter blog title ..."), {
      target: { value: postTitle },
    });
    const postContent = "These are the top ten must have plants.";
    fireEvent.input(screen.getByPlaceholderText("enter blog content ..."), {
      target: { value: postContent },
    });
    fireEvent.click(screen.getByText("Save"));

    const postTitle1 = "How often to water your plants";
    fireEvent.input(screen.getByPlaceholderText("enter blog title ..."), {
      target: { value: postTitle1 },
    });
    const postContent2 = "Depending on the plant and the placement ...";
    fireEvent.input(screen.getByPlaceholderText("enter blog content ..."), {
      target: { value: postContent2 },
    });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Must have plants"));
    expect(screen.getByText("These are the top ten must have plants."));
    expect(screen.getByText("How often to water your plants"));
    expect(screen.getByText("Depending on the plant and the placement ..."));
  });
  it("should call onEdit with the correct post when the Edit button is clicked", () => {
    const testPosts: Post[] = [
      {
        id: 1,
        title: "How often should you water your plant?",
        content: "This is an interesting question.",
      },
      {
        id: 2,
        title: "Plants that don’t need much sunlight?",
        content: "Some plants want a cool environment.",
      },
    ];
    const handleEdit = vi.fn();
    render(<BlogList blogs={testPosts} onEdit={handleEdit} />);

    const editButtons = screen.getAllByText("Edit");
    fireEvent.click(editButtons[0]);

    expect(handleEdit).toHaveBeenCalledWith(testPosts[0]);
  });

  it("should be possible to edit a post", async () => {
    render(<App />);

    const postTitle = "Must have plants";
    fireEvent.input(screen.getByPlaceholderText("enter blog title ..."), {
      target: { value: postTitle },
    });
    const postContent = "These are the top ten must have plants.";
    fireEvent.input(screen.getByPlaceholderText("enter blog content ..."), {
      target: { value: postContent },
    });
    fireEvent.click(screen.getByLabelText("save"));

    fireEvent.click(screen.getByText("Edit"));
    fireEvent.input(screen.getByPlaceholderText("enter blog title ..."), {
      target: { value: "Updated Title" },
    });
    fireEvent.input(screen.getByPlaceholderText("enter blog content ..."), {
      target: { value: "Updated Content" },
    });
    fireEvent.click(screen.getByLabelText("save"));

    expect(await screen.findByText("Updated Title")).toBeInTheDocument();
    expect(screen.getByText("Updated Content")).toBeInTheDocument();
  });
});

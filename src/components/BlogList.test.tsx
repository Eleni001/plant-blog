import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Post } from "./BlogForm";
import BlogList from "./BlogList";

describe("BlogList", () => {
  it("should render an empty list of posts", () => {
    render(<BlogList blogs={[]} onEdit={vi.fn()} />);

    expect(screen.getByRole("list")).toBeVisible();
  });

  it("should render a list of posts", () => {
    const testPosts: Post[] = [
      {
        id: 1,
        title: "How often should you water your plant?",
        content: "This is an interesting question.",
      },
      {
        id: 2,
        title: "Plants that don´t need much sunlight?",
        content: "Some plants want a cool enviroment",
      },
    ];
    render(<BlogList blogs={testPosts} onEdit={vi.fn()} />);

    expect(screen.getAllByRole("listitem").length).toEqual(2);
    expect(
      screen.getByText("How often should you water your plant?").textContent
    ).toBeVisible();
    expect(
      screen.getByText("Plants that don’t need much sunlight?")
    ).toBeVisible();
    /*  expect(screen.getAllByRole("listitem")[0].).toEqual(2); */
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
});

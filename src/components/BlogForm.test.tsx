import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BlogForm from "./BlogForm";

describe("BlogForm", () => {
  it("should render an input, textarea and a submit button", () => {
    render(<BlogForm onSubmit={vi.fn()} />);

    expect(screen.getByPlaceholderText("enter blog title ...")).toBeVisible();
    expect(screen.getByPlaceholderText("enter blog content ...")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });

  it("should submit the text that was entered in the input and textarea", () => {
    const handleSubmit = vi.fn();
    render(<BlogForm onSubmit={handleSubmit} />);

    fireEvent.input(screen.getByPlaceholderText("enter blog title ..."), {
      target: { value: "Must have plants" },
    });
    fireEvent.input(screen.getByPlaceholderText("enter blog content ..."), {
      target: { value: "These are the top ten must have plants." },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit).toBeCalledWith({
      title: "Must have plants",
      content: "These are the top ten must have plants.",
    });
  });
});

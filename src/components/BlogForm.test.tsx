import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BlogForm from "./BlogForm";

describe("BlogForm", () => {
  it("should render an input with a submit button", () => {
    render(<BlogForm onSubmit={vi.fn()} />);

    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });

  it("should submit the text that was entered in the input", () => {
    const handleSubmit = vi.fn();
    render(<BlogForm onSubmit={handleSubmit} />);

    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Must have plants" },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit).toBeCalledWith("Must have plants");
  });
});

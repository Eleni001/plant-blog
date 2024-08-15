import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

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
    expect( await screen.findByText(postTitle));
    
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
      target: { value: postContent2},
    });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Must have plants"));
    expect(screen.getByText("These are the top ten must have plants."));
    expect(screen.getByText("How often to water your plants"));
    expect(screen.getByText("Depending on the plant and the placement ..."));
  });
});

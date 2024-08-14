import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BlogList from "./BlogList";

describe("BlogList", () => {
  it("should render an empty list of posts", () => {
    render(<BlogList blogs={[]} />);

    expect(screen.getByRole("list")).toBeVisible();
  });

  it("should render a list of posts", () => {
    const testPosts = [
      {
        title: "How often should you water your plant?",
        content: "This is an interesting question.",
      },
      {
        title: "Plants that don´t need much sunlight?",
        content: "Some plants want a cool enviroment",
      },
    ];
    render(<BlogList blogs={testPosts} />);

    expect(screen.getAllByRole("listitem").length).toEqual(2);
   /*  expect(screen.getAllByRole("listitem")[0].).toEqual(2); */
  });
});

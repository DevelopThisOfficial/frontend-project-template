import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TestComponent from "../components/TestComponent";

describe("Page", () => {
  it("renders a heading", () => {
    render(<TestComponent />);
    const element = screen.getByTestId("test-id");
    expect(element).toBeInTheDocument();
  });
});

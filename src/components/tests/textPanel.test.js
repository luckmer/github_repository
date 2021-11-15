import TextPanel from "../TextPanel";
import { render } from "@testing-library/react";

describe("TextPanel", () => {
  test("should render TextPanel with no errors", () => {
    const shortDescription = "Loading...";

    render(<TextPanel description={shortDescription} />);
  });
  test("should cut description if is too long", () => {
    const longDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    render(<TextPanel description={longDescription} />);
  });

  test("description can by empty", () => {
    const shortDescription = "";

    expect(shortDescription).toBe("");
  });

  test("should load description", () => {
    const shortDescription = "Loading...";

    const text = render(<TextPanel description={shortDescription} />);
    const check = text.getByRole("dialog");

    expect(check).toBeInTheDocument();
  });
});

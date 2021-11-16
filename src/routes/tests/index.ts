import { routes } from "../index";
import Main from "../../pages/Main";
import IncorrectPage from "../../pages/IncorrectPage";

describe("routes", () => {
  test("should includes pages", () => {
    const length = routes.length;

    expect(length).toBe(2);
  });
  test("should includes paths", () => {
    const paths = routes.map(({ path }: { path: string }) => path);

    expect(paths).toEqual(["", "*"]);
  });

  test("should includes elements", () => {
    const paths = routes.map(
      ({ Element }: { Element: () => JSX.Element }) => Element
    );

    expect(paths).toEqual([Main, IncorrectPage]);
  });
});

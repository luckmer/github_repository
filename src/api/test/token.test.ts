import { githubUrl, TOKEN } from "../token";

describe("constants", () => {
  test("expect correct link for github api", () => {
    const link = "https://api.github.com/graphql";

    expect(githubUrl).toBe(link);
  });

  test("link can't by different", () => {
    const link = "https://api.github.com";

    expect(githubUrl).not.toBe(link);
  });

  test("token can't by empty", () => {
    const token = "";

    expect(TOKEN).not.toBe(token);
  });
});

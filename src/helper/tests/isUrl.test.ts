import isUrl from "../isUrl";

describe("isUrl", () => {
  test("should detect link", () => {
    const link = "https://2048-l.netlify.app";

    const check = isUrl(link);

    expect(check).toBe(true);
  });

  test("should detect text", () => {
    const link = "home is here";

    const check = isUrl(link);

    expect(check).toBe(false);
  });

  test("should detect empty link", () => {
    const link = "";

    const check = isUrl(link);

    expect(check).toBe(false);
  });
});

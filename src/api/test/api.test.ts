// import { githubApi, Query } from "../index";
import Query from "../Queries";
import githubApi from "../api";

describe("githubApi", () => {
  test("expect correct length for repositories", async () => {
    const query = Query.repository("react");
    const { data } = await githubApi(query);
    const repos = data.search.edges;
    const length = repos.length;

    expect(length).toBe(100);
  });

  test("data can't by equal []", async () => {
    const query = Query.repository("react");
    const { data } = await githubApi(query);
    const repos = data.search.edges;

    expect(repos).not.toEqual([]);
  });
});

import axios from "axios";
import { TOKEN, githubUrl } from "./token";

const githubApi = async (query: string) => {
  const oauth = { Authorization: "bearer " + TOKEN };

  const PostJson = await axios.post(
    githubUrl,
    { query: query },
    { headers: oauth }
  );

  const repository = await PostJson.data;

  return repository;
};

export default githubApi;

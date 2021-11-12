import { propsInterface, Node } from "./propsInterface";

import repositories from "../api/Queries";
import constants from "./constants";
import githubApi from "../api/api";

class FormHandle {
  getDataByUserName = async (props: propsInterface) => {
    const { text, setData } = props;
    const user = constants.clearSpacer(text);
    const repoName = text.split(",").pop();

    if (!user) return;

    const userQraph = repositories.usersRepository(user);
    const { data } = await githubApi(userQraph);
    const repos = data?.user?.repositories?.edges;

    if (!repos) return;

    const dataResult = {
      title: "searching by user name",
      key: repoName,
      data: repoName
        ? repos.filter(({ node }: Node) => node.name === repoName)
        : repos
    };
    setData(dataResult);
  };

  getDataByRepositoryName = async (props: propsInterface) => {
    const { text, setData } = props;
    const repoName = text.split(",").pop();

    if (!repoName) return;

    const userQraph = repositories.repository(repoName);
    const { data } = await githubApi(userQraph);
    const repos = data.search.edges;

    if (!repos) return;

    const dataResult = {
      title: "searching by repository",
      key: repoName,
      data: repos
    };
    setData(dataResult);
  };
}

const formHandle = new FormHandle();

export default formHandle;

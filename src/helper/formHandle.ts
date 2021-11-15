import { propsInterface, Node } from "./interface/propsInterface";

import repositories from "../api/Queries";
import githubApi from "../api/api";

class FormHandle {
  getDataByUserName = async (props: propsInterface) => {
    const { text, setData, setLoading } = props;
    const user = text.user;
    const repoName = text.repository;
    setLoading(true);

    if (!user) return;

    const userQraph = repositories.usersRepository(user);
    const { data } = await githubApi(userQraph);
    const repos = data?.user?.repositories?.edges;

    if (!repos) return;

    const dataResult = {
      title: "searching by user name",
      key: !repoName ? user : repoName,
      data: repoName
        ? repos.filter(({ node }: Node) => node.name === repoName)
        : repos
    };
    setData(dataResult);
    setLoading(false);
  };

  getDataByRepositoryName = async (props: propsInterface) => {
    const { text, setData, setLoading } = props;
    const repoName = text.repository;
    setLoading(true);

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
    setLoading(false);
  };
}

const formHandle = new FormHandle();

export default formHandle;

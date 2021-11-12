class Repositories {
  repository = (search?: string) => `query {
    search(query: "name:${search}", type: REPOSITORY, first:100 ) {
    repositoryCount
      edges {
        node {
          ... on Repository {
            owner {
              id
              login
            }
            description
            name
            url
            description       
            primaryLanguage {name}
            createdAt
            pushedAt
            updatedAt
          }
        }
      }
    }
  }`;

  usersRepository = (user: string) => {
    return `
    query { 
      user(login:"${user}" ) {
          repositories(first: 100, isFork: false) {
            edges {
              node {
                ... on Repository {
                  owner {
                    id
                    login
                  }
                  description
                  name
                  url
                  description       
                  primaryLanguage {name}
                  createdAt
                  pushedAt
                  updatedAt
                }
              }
            } 
          }
        }
      }`;
  };

  userData = (user: string) => {
    return `query{
        search (query: "${user}", type: USER, first: 1){
          edges {
            node {
              ... on User {
                login
              }
            }
          }
        }
    }`;
  };
}

const repositories = new Repositories();

export default repositories;

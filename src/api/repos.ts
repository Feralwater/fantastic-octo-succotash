export interface IRepo {
  id: string;
  repoName: string;
  repoSize: string;
  repoOwner: string;
}

interface IReposList {
  repositories: IRepo[];
}

export const getReposList = (): Promise<IReposList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("/reposList.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000);
  });
};

export const getRepo = (id: string): Promise<IRepo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("/repo.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const repo = data.repositories.find((repo: IRepo) => repo.id === id);
          resolve(repo);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000);
  });
}
export interface IRepo {
  id: string;
  repoName: string;
  repoSize: string;
  repoOwner: string;
}

export interface IReposList {
  repositories: IRepo[];
  totalItems: number;
  itemsPerPage: number;
}

export interface ISelectedRepo {
  id: string;
  repoName: string;
  repoOwner: string;
  isPrivate: boolean;
  numberOfFiles: number;
  fileContent: string;
}

export const getReposList = (pageNumber: number): Promise<IReposList> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/reposList.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: IReposList) => {
          const perPage = 4;
          const startIndex = (pageNumber - 1) * perPage;
          const endIndex = startIndex + perPage;
          const paginatedRepos = data.repositories.slice(startIndex, endIndex);

          resolve({
            repositories: paginatedRepos,
            totalItems: data.totalItems,
            itemsPerPage: perPage,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          reject(error);
        });
    }, 1000);
  });
};

export const getRepo = (id: string): Promise<ISelectedRepo> => {
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
          const repo = data.repositories.find((repo: ISelectedRepo) => repo.id === id);
          resolve(repo);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000);
  });
}
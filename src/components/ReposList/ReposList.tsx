import {useEffect, useState} from 'react';
import {Repo} from "../Repo/Repo.tsx";
import {getReposList, IRepo} from "../../api/repos.ts";

export const ReposList = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [isReposLoading, setIsReposLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsReposLoading(true);
        getReposList().then((res) => {
          setRepos(res.repositories);
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsReposLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      {isReposLoading && <div>Loading...</div>}
      {!isReposLoading && <ul>
        {repos.map((repo: IRepo) => (
          <Repo key={repo.id}
                {...repo}
          />
        ))}
      </ul>}
    </div>
  );
};


import {useEffect, useState} from 'react';
import {Repo} from "../Repo/Repo.tsx";
import {getReposList, IRepo} from "../../api/repos.ts";
import './ReposList.styles.css';

export const ReposList = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [isReposLoading, setIsReposLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsReposLoading(true);
        const res = await getReposList();
        setRepos(res.repositories);
      } catch (e) {
        console.error(e);
      } finally {
        setIsReposLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1>GitHub Repositories</h1>
      {isReposLoading && <div className="loading">Loading...</div>}
      {!isReposLoading && <ul>
        {repos.map((repo: IRepo) => (
          <Repo
            key={repo.id}
            {...repo}
          />
        ))}
      </ul>}
    </div>
  );
};


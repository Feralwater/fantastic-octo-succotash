import {useEffect, useState} from 'react';
import {getRepo, getReposList, IRepo, ISelectedRepo} from "../../api/repos.ts";
import './ReposList.styles.css';
import {RepoInfo} from "../RepoInfo/RepoInfo.tsx";
import {Repo} from "../Repo/Repo.tsx";

export const ReposList = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [isReposLoading, setIsReposLoading] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<ISelectedRepo | null>(null);
  const [isRepoInfoLoading, setIsRepoInfoLoading] = useState(false);

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

  const handleRepoClick = async (id: string) => {
    try {
      setIsRepoInfoLoading(true);
      const res = await getRepo(id);
      setSelectedRepo(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRepoInfoLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>GitHub Repositories</h1>
      <div className="repos-container">
        <div className="left-frame">
          {isReposLoading && <div className="loading">Loading...</div>}
          {!isReposLoading && (
            <ul>
              {repos.map((repo: IRepo) => (
                <li onClick={() => handleRepoClick(repo.id)} key={repo.id}>
                  <Repo {...repo} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="right-frame">
          {!selectedRepo && (
            <div>
              Click on a repository to see details
            </div>
          )}
          {isRepoInfoLoading && <div className="loading">Loading...</div>}
          {selectedRepo && (
            <RepoInfo selectedRepo={selectedRepo}/>
          )}
        </div>
      </div>
    </div>
  );
};


import {IRepo} from "../../api/repos.ts";
import './ReposList.styles.css';
import {RepoInfo} from "../RepoInfo/RepoInfo.tsx";
import {Repo} from "../Repo/Repo.tsx";
import {useRepos} from "../../hooks/useRepos.ts";

export const ReposList = () => {
  const {
    repos,
    selectedRepo,
    isReposLoading,
    isRepoInfoLoading,
    handleRepoClick,
    closeRepoInfo
  } = useRepos();

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
          {!isRepoInfoLoading && (
            <RepoInfo selectedRepo={selectedRepo} closeRepoInfo={closeRepoInfo}/>
          )}
        </div>
      </div>
    </div>
  );
};


import {ISelectedRepo} from "../../api/repos.ts";

interface IRepoInfoProps {
  selectedRepo: ISelectedRepo | null;
  setSelectedRepo: (repo: ISelectedRepo | null) => void;
}

export const RepoInfo = ({selectedRepo, setSelectedRepo}: IRepoInfoProps) => {
  if (!selectedRepo) {
    return null;
  }

  const handleCloseClick = () => setSelectedRepo(null);

  return (
    <div className="repo-details">
      <button onClick={handleCloseClick}>X</button>
      <h2>{selectedRepo.repoName}</h2>
      <p>Repo owner: {selectedRepo.repoOwner}</p>
      <p>
        {selectedRepo.isPrivate
          ? 'This is a private repository'
          : 'This is a public repository'
        }
      </p>
      <p>Number of files: {selectedRepo.numberOfFiles}</p>
      <p>File content: {selectedRepo.fileContent}</p>
    </div>
  );
};

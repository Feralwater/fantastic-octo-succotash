import {ISelectedRepo} from "../../api/repos.ts";

interface IRepoInfoProps {
  selectedRepo: ISelectedRepo | null;
}

export const RepoInfo = ({selectedRepo}: IRepoInfoProps) => {
  return (
    <div className="repo-details">

    </div>
  );
};

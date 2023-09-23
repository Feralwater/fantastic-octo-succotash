import {IRepo} from "../../api/repos.ts";

export const Repo = ({
                       repoName,
                       repoSize,
                       repoOwner
                     }: IRepo) => {
  return (
    <li>
      <div>
        <h2>{repoName}</h2>
        <p>Size: {repoSize}</p>
        <p>Owner: {repoOwner}</p>
      </div>
    </li>
  );
};

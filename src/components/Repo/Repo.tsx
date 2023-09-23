import {IRepo} from "../../api/repos.ts";
import './Repo.styles.css';

export const Repo = ({
                       repoName,
                       repoSize,
                       repoOwner
                     }: IRepo) => {
  return (
    <li className="repo">
      <div>
        <h2>{repoName}</h2>
        <div className="meta-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 14 14"
          >
            <path
              fillRule="evenodd"
              d="M1 4a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2-2a1 1 0 011-1h8a1 1 0 011 1v1H3V2z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M0 4a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H4a4 4 0 01-4-4V4zm2-1a1 1 0 011-1h8a1 1 0 011 1v1H1V3z"
              clipRule="evenodd"
            />
          </svg>
          <span>{repoSize} KB</span>
        </div>
        <div className="meta-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 14 14"
          >
            <path
              fillRule="evenodd"
              d="M8 0a4 4 0 014 4c0 2.5-2 4-4 4s-4-1.5-4-4S5.5 0 8 0zm0 10c2.5 0 6 1.25 6 3v1H2v-1c0-1.75 3.5-3 6-3z"
            />
          </svg>
          <span>{repoOwner}</span>
        </div>
      </div>
    </li>
  );
};

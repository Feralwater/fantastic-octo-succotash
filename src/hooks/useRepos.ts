import {useCallback, useEffect, useState} from "react";
import {getRepo, getReposList, IRepo, ISelectedRepo} from "../api/repos.ts";

export const useRepos = () => {
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

  const handleRepoClick = useCallback(async (id: string) => {
    try {
      setIsRepoInfoLoading(true);
      const res = await getRepo(id);
      setSelectedRepo(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRepoInfoLoading(false);
    }
  }, []);

  const closeRepoInfo = useCallback(() => setSelectedRepo(null), []);

  return {
    repos,
    isReposLoading,
    selectedRepo,
    isRepoInfoLoading,
    handleRepoClick,
    closeRepoInfo
  }
}
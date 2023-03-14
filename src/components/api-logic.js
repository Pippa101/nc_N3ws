import { useEffect } from "react";

export const FetchMostPopularArticles = (setIsLoading, setMostPopular) => {
  return useEffect(() => {
    fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
      .then((response) => response.json())
      .then((body) => {
        setMostPopular(body.slice(0, 4));
        setIsLoading(false);
      });
  }, [setIsLoading, setMostPopular]);
};

export const FetchAllArticlesByTopic = (setIsLoading, setArticles) => {
  return useEffect(() => {
    fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
      .then((response) => response.json())
      .then((body) => {
        setArticles(body);
        setIsLoading(false);
      });
  }, [setIsLoading, setArticles]);
};

export const FetchUsers = (setIsLoading, setUsers) => {
  return useEffect(() => {
    setIsLoading(true);
    fetch("https://n3ws.onrender.com/api/users")
      .then((response) => response.json())
      .then((body) => {
        setUsers(body);
        setIsLoading(false);
      });
  }, [setIsLoading, setUsers]);
};

export const FetchSingleArticle = (
  setIsLoading,
  article_id,
  setSingleArticle
) => {
  return useEffect(() => {
    setIsLoading(true);
    fetch(`https://n3ws.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((body) => {
        setSingleArticle(body);
        setIsLoading(false);
      });
  }, [setIsLoading, article_id, setSingleArticle]);
};

export const FetchMostPopularArticles = (setIsLoading, setMostPopular) => {
  fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
    .then((response) => response.json())
    .then((body) => {
      setMostPopular(body.slice(0, 4));
      setIsLoading(false);
    });
};

export const FetchAllArticlesByTopic = (setIsLoading, setArticles) => {
  fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
    .then((response) => response.json())
    .then((body) => {
      setArticles(body);
      setIsLoading(false);
    });
};

export const FetchUsers = (setIsLoading, setUsers) => {
  setIsLoading(true);
  fetch("https://n3ws.onrender.com/api/users")
    .then((response) => response.json())
    .then((body) => {
      setUsers(body);
      setIsLoading(false);
    });
};

export const FetchSingleArticle = (
  setIsLoading,
  article_id,
  setSingleArticle
) => {
  setIsLoading(true);
  fetch(`https://n3ws.onrender.com/api/articles/${article_id}`)
    .then((response) => response.json())
    .then((body) => {
      setSingleArticle(body);
      setIsLoading(false);
    });
};

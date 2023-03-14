export const FetchMostPopularArticles = () => {
  return fetch("https://n3ws.onrender.com/api/articles?sort_by=votes").then(
    (response) => {
      return response.json();
    }
  );
};

export const FetchAllArticlesByTopic = () => {
  return fetch("https://n3ws.onrender.com/api/articles?sort_by=votes").then(
    (response) => response.json()
  );
};

export const FetchUsers = () => {
  return fetch("https://n3ws.onrender.com/api/users").then((response) =>
    response.json()
  );
};

export const FetchSingleArticle = (article_id) => {
  return fetch(`https://n3ws.onrender.com/api/articles/${article_id}`).then(
    (response) => response.json()
  );
};

export const FetchArticleComments = (article_id) => {
  return fetch(
    `https://n3ws.onrender.com/api/articles/${article_id}/comments`
  ).then((response) => response.json());
};

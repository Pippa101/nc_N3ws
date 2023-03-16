export const FetchMostPopularArticles = () => {
  return fetch("https://n3ws.onrender.com/api/articles?sort_by=votes").then(
    (response) => {
      return response.json();
    }
  );
};

export const FetchAllArticlesByTopic = (topicQuery, topic) => {
  return fetch(
    topicQuery
      ? `https://n3ws.onrender.com/api/articles${topic}`
      : `https://n3ws.onrender.com/api/articles`
  ).then((response) => response.json());
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

export const PatchArticleVotes = (article_id, vote) => {
  return fetch(`https://n3ws.onrender.com/api/articles/${article_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes: vote }),
  });
};

export const PostComment = (article_id, commentInput) => {
  return fetch(
    `https://n3ws.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "tickle122", body: commentInput }),
    }
  );
};

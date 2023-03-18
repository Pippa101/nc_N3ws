import axios from "axios";

export const FetchMostPopularArticles = () => {
  return fetch("https://n3ws.onrender.com/api/articles?sort_by=votes").then(
    (response) => {
      return response.json();
    }
  );
};

export const FetchAllArticlesByTopic = (
  topicQuery,
  sortByQuery,
  orderQuery
) => {
  return axios
    .get("https://n3ws.onrender.com/api/articles", {
      params: {
        topic: topicQuery,
        sort_by: sortByQuery,
        order_by: orderQuery,
      },
    })
    .then((response) => {
      return response.data;
    });
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

export const PostComment = (article_id, commentInput, loggedInUser) => {
  return fetch(
    `https://n3ws.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: loggedInUser, body: commentInput }),
    }
  );
};

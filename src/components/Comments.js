import { useEffect, useState } from "react";

const [isLoading, setIsLoading] = useState(true);
const [articleComments, setArticleComments] = useState([]);

const FetchArticleComments = (article_id) => {
  return fetch(
    `https://n3ws.onrender.com/api/articles/${article_id}/comments`
  ).then((response) => response.json());
};

const Comments = () => {
  useEffect(() => {
    setIsLoading(true);
    FetchArticleComments(article_id).then((body) => {
      setArticleComments(body);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <section>
      <h3>Leave A Comment</h3>
      {articleComments.map((comment) => {
        <article>
          <p>{comment.author}</p>
          <p>{comment.created_at}</p>
          <p>{comment.body}</p>
          <p>votes:{comment.votes}</p>
        </article>;
      })}
    </section>
  );
};

export default Comments;

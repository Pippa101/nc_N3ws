import { useEffect, useState } from "react";
import { FetchArticleComments } from "./api-logic";

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    FetchArticleComments(article_id).then((body) => {
      setArticleComments(body);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="comment-section">
      <h3>Leave A Comment</h3>
      {articleComments.map((comment) => {
        return (
          <article key={comment.comment_id} className="comment-article">
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>votes:{comment.votes}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Comments;

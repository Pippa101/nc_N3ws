import { useEffect, useState } from "react";
import { FetchArticleComments } from "./api-logic";
import { PostComment } from "./api-logic";

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    setIsLoading(true);
    FetchArticleComments(article_id).then((body) => {
      setArticleComments(body);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    PostComment(article_id, commentInput)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="comment-section">
      <h3>Leave A Comment</h3>

      <form className="comment-article" onSubmit={handleCommentSubmit}>
        <input type="text" onChange={handleCommentInput} />
        <button type="submit">Post</button>
      </form>

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

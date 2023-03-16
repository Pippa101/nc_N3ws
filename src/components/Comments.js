import { useEffect, useState } from "react";
import { FetchArticleComments } from "./api-logic";
import { PostComment } from "./api-logic";

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [reloadComments, setReloadComments] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FetchArticleComments(article_id).then((body) => {
      setArticleComments(body);
      setIsLoading(false);
    });
  }, [article_id, reloadComments]);

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    PostComment(article_id, commentInput)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setReloadComments(true);
      })
      .catch((error) =>
        alert(
          "sorry your comment didn't go through please try again.",
          `Error: ${error}`
        )
      );
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="comment-section">
      <h3>Leave A Comment</h3>

      <form id="comment-form" onSubmit={handleCommentSubmit}>
        <input type="text" onChange={handleCommentInput} />
        <button id="submit-comment-button" type="submit">
          Post
        </button>
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

import { useEffect, useState } from "react";
import { FetchArticleComments } from "./api-logic";
import { PostComment } from "./api-logic";

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FetchArticleComments(article_id).then((body) => {
      setArticleComments(body);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleCommentInput = (e) => {
    setPosted(false);
    setInputError(false);
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput !== "") {
      PostComment(article_id, commentInput)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setCommentInput("");
          setArticleComments((currArticles) => {
            return [response, ...currArticles];
          });
          setPosted(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setInputError(true);
    }
    e.target.reset();
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="comment-section">
      <h3>{posted ? "Comment Posted!" : "Leave A Comment"}</h3>

      <form id="comment-form" onSubmit={handleCommentSubmit}>
        <input type="text" onChange={handleCommentInput} />
        {inputError ? (
          <p id="error-p">Please type something in</p>
        ) : (
          <button id="submit-comment-button" type="submit">
            Post
          </button>
        )}
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

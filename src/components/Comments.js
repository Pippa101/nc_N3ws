import { useEffect, useState } from "react";
import { FetchArticleComments } from "./api-logic";
import { PostComment } from "./api-logic";

const Comments = ({
  article_id,
  loggedInUser,
  loggedInError,
  setLoggedInError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleComments, setArticleComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [offlineError, setOfflineError] = useState(false);
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
      if (loggedInUser) {
        PostComment(article_id, commentInput, loggedInUser)
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((response) => {
            console.log(response);
            setCommentInput("");
            setOfflineError(false);
            setArticleComments((currArticles) => {
              return [response, ...currArticles];
            });
            setPosted(true);
          })
          .catch((error) => {
            console.log(error);
            setOfflineError(true);
          });
      } else {
        setLoggedInError(true);
      }
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
      <h4 className="error-msg">
        {loggedInError ? "You must log in to comment" : ""}
      </h4>

      <form id="comment-form" onSubmit={handleCommentSubmit}>
        <input type="text" onChange={handleCommentInput} />
        {inputError ? (
          <p id="error-p">Please type something in</p>
        ) : (
          <button id="submit-comment-button" type="submit">
            Post
          </button>
        )}
        {offlineError ? (
          <p>Sorry your comment didn't go through try again later</p>
        ) : (
          <p></p>
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

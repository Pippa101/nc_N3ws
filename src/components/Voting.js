import { useEffect, useState } from "react";
import { PatchArticleVotes } from "./api-logic";

const Voting = ({
  singleArticle,
  article_id,
  loggedInUser,
  loggedInError,
  setLoggedInError,
}) => {
  const [vote, setVote] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    PatchArticleVotes(article_id, vote)
      .then((response) => response.json())
      .catch((error) => {
        return alert(
          "Sorry your vote didn't go through, please try again",
          `Error: ${error}`
        );
      });
  }, [article_id, vote]);

  const incrementVote = (e) => {
    if (loggedInUser) {
      setVote(1);
      setDisabledButton(true);
    } else {
      setLoggedInError(true);
      setDisabledButton(true);
    }
  };
  const decrementVote = (e) => {
    if (loggedInUser) {
      setVote(-1);
      setDisabledButton(true);
    } else {
      setLoggedInError(true);
      setDisabledButton(true);
    }
  };

  return (
    <section id="vote-section">
      {loggedInError ? (
        <p>Please Log In</p>
      ) : (
        <h4>Votes: {singleArticle.votes + vote}</h4>
      )}

      <button
        disabled={disabledButton}
        className="vote-button"
        onClick={incrementVote}
      >
        Vote Up!
      </button>
      <button
        disabled={disabledButton}
        className="vote-button"
        onClick={decrementVote}
      >
        Vote Down!
      </button>
    </section>
  );
};

export default Voting;

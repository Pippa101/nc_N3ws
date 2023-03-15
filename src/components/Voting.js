import { useEffect, useState } from "react";
import { PatchArticleVotes } from "./api-logic";

const Voting = ({ SingleArticle, article_id }) => {
  const [vote, setVote] = useState(0);
  const [appendedVote, setAppendedVote] = useState(SingleArticle.votes);
  useEffect(() => {
    PatchArticleVotes(article_id, vote)
      .then((response) => response.json())
      .then((response) => setAppendedVote(response.votes));
  }, [article_id, vote]);

  const incrementVote = (e) => {
    setVote(1);
  };
  const decrementVote = (e) => {
    setVote(-1);
  };

  return (
    <section id="vote-section">
      <h4>Votes: {appendedVote}</h4>
      <button className="vote-button" onClick={incrementVote}>
        Vote Up!
      </button>
      <button className="vote-button" onClick={decrementVote}>
        Vote Down!
      </button>
    </section>
  );
};

export default Voting;

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchSingleArticle } from "./api-logic";
import Comments from "./Comments";
import Voting from "./Voting";

const SingleArticle = ({ loggedInUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();
  const [loggedInError, setLoggedInError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FetchSingleArticle(article_id).then((body) => {
      setSingleArticle(body);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main id="SingleArticle-main">
      <img
        src={singleArticle.article_img_url}
        alt={`scene of ${singleArticle.topic}`}
      />
      <h2>{singleArticle.title}</h2>
      <h3>
        <span className="orange">Author:</span> {singleArticle.author}
      </h3>
      <p id="article-body">{singleArticle.body}</p>
      <section id="login-section">
        <p>Sign in to vote or leave a commment</p>
        <Link to="/users">
          <button>Log In</button>
        </Link>
      </section>
      <Voting
        singleArticle={singleArticle}
        loggedInUser={loggedInUser}
        article_id={article_id}
        loggedInError={loggedInError}
        setLoggedInError={setLoggedInError}
      />
      <Comments
        loggedInError={loggedInError}
        setLoggedInError={setLoggedInError}
        loggedInUser={loggedInUser}
        article_id={article_id}
      />
    </main>
  );
};

export default SingleArticle;

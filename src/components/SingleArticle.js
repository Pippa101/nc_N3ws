import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchSingleArticle } from "./api-logic";
import Comments from "./Comments";
import Voting from "./Voting";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

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
      <h3>Author: {singleArticle.author}</h3>
      <p>{singleArticle.body}</p>
      <Voting singleArticle={singleArticle} article_id={article_id} />
      <Comments article_id={article_id} />
    </main>
  );
};

export default SingleArticle;

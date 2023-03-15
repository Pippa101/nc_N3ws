import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchSingleArticle } from "./api-logic";
import Comments from "./Comments";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [SingleArticle, setSingleArticle] = useState({});
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
        src={SingleArticle.article_img_url}
        alt={`scene of {SingleArticle.topic}`}
      />
      <h2>{SingleArticle.title}</h2>
      <h3>Author: {SingleArticle.author}</h3>
      <p>{SingleArticle.body}</p>
      <Comments article_id={article_id} />
    </main>
  );
};

export default SingleArticle;

import { useEffect, useState } from "react";
import { FetchAllArticlesByTopic } from "./api-logic";
import { Link, useSearchParams } from "react-router-dom";

const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order_by");

  useEffect(() => {
    setIsLoading(true);
    FetchAllArticlesByTopic(topicQuery, sortByQuery, orderQuery).then(
      (body) => {
        setArticles(body);
        setIsLoading(false);
      }
    );
  }, [topicQuery, sortByQuery, orderQuery]);

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", e.target.value);
    setSearchParams(newParams);
  };

  const handleOrderChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order_by", e.target.value);
    setSearchParams(newParams);
  };

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <h2>All Articles</h2>

      <form>
        <select id="sorting-select" onChange={handleSortChange}>
          <option>Sort By</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>

        <select onChange={handleOrderChange}>
          <option>Order</option>
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </form>

      <h2 id="topic-h2">{topicQuery}</h2>

      <section id="ArticlesByTopic-article-section">
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.title}
              className="links"
            >
              <article className="articles" key={article.article_id}>
                <img
                  src={article.article_img_url}
                  alt={`scene of ${article.topic}`}
                />
                <h4>{article.title}</h4>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
export default ArticlesByTopic;

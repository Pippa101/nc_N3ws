import { useEffect, useState } from "react";

const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
      .then((response) => response.json())
      .then((body) => {
        setArticles(body);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <h2>All Articles</h2>
      <section id="ArticlesByTopic-article-section">
        {articles.map((article) => {
          return (
            <article className="articles" key={article.article_id}>
              <img
                src={article.article_img_url}
                alt={`scene of ${article.topic}`}
              />
              <h4>{article.title}</h4>
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default ArticlesByTopic;

import { useState } from "react";
import { FetchAllArticlesByTopic } from "./api-logic";

const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  FetchAllArticlesByTopic(setIsLoading, setArticles);

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

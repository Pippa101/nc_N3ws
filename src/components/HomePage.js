import { useState, useEffect } from "react";
import TopicSearch from "./TopicSearch";
import { FetchMostPopularArticles } from "./api-logic";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [mostPopular, setMostPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    FetchMostPopularArticles().then((body) => {
      setMostPopular(body.slice(0, 4));
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <h2 id="home-h2">
        Fancy A Read<span className="orange">?</span>
      </h2>
      <TopicSearch />
      <h3>Most Popular</h3>
      <section id="home-article-section">
        {mostPopular.map((popularArticle) => {
          return (
            <Link
              to={`/articles/${popularArticle.article_id}`}
              key={popularArticle.title}
              className="links"
            >
              <article
                className="popular-articles"
                key={popularArticle.article_id}
              >
                <img
                  src={popularArticle.article_img_url}
                  alt={`scene of ${popularArticle.topic}`}
                />
                <h4>{popularArticle.title}</h4>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import TopicSearch from "./TopicSearch";

const HomePage = () => {
  const [mostPopular, setMostPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
      .then((response) => response.json())
      .then((body) => {
        setMostPopular(body.slice(0, 4));
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <h2>Fancy A Read?</h2>
      <TopicSearch />
      <h3>Most Popular</h3>
      <section id="home-article-section">
        {mostPopular.map((popularArticle) => {
          return (
            <article className="articles" key={popularArticle.article_id}>
              <img
                src={popularArticle.article_img_url}
                alt={`scene of ${popularArticle.topic}`}
              />
              <h4>{popularArticle.title}</h4>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;

import { useState } from "react";
import TopicSearch from "./TopicSearch";
import { FetchMostPopularArticles } from "./api-logic";

const HomePage = () => {
  const [mostPopular, setMostPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  FetchMostPopularArticles(setIsLoading, setMostPopular);

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

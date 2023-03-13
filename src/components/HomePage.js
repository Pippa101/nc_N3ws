import { useEffect, useState } from "react";

const HomePage = () => {
  const [mostPopular, setMostPopular] = useState([]);
  useEffect(() => {
    fetch("https://n3ws.onrender.com/api/articles?sort_by=votes")
      .then((response) => response.json())
      .then((body) => setMostPopular(body.slice(0, 4)));
  }, []);
  return (
    <main>
      <h2>Fancy A Read?</h2>
      {/* <TopicSearch /> */}
      <section>
        <h3>Most Popular</h3>
        {mostPopular.map((popularArticle) => {
          return (
            <article class="popular-articles" key={popularArticle.article_id}>
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

import { Link } from "react-router-dom";
import { useState } from "react";

const TopicSearch = () => {
  const [topic, setTopic] = useState("");
  const handleTopicChange = (e) => {
    setTopic(`?topic=${e.target.value}`);
  };

  return (
    <form id="topic-search">
      <label htmlFor="topics">Topics</label>
      <select onChange={handleTopicChange}>
        <option value="">All Articles</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
      <Link to={`/articles${topic}`} className="links">
        <button type="submit">Go</button>
      </Link>
    </form>
  );
};

export default TopicSearch;

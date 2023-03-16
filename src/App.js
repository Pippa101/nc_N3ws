import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UserAccounts from "./components/UserAccounts";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage topic={topic} setTopic={setTopic} />}
        />
        <Route path="/users" element={<UserAccounts />} />
        <Route path="/articles" element={<ArticlesByTopic topic={topic} />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;

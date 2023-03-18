import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UserAccounts from "./components/UserAccounts";
import ArticlesByTopic from "./components/ArticlesByTopic";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/users"
          element={
            <UserAccounts
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
            />
          }
        />
        <Route path="/articles" element={<ArticlesByTopic />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle loggedInUser={loggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;

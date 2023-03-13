import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UserAccounts from "./components/UserAccounts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserAccounts />} />
      </Routes>
    </div>
  );
}

export default App;

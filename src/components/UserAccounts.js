import { useEffect } from "react";
import { useState } from "react";

const UserAccounts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://n3ws.onrender.com/api/users")
      .then((response) => response.json())
      .then((body) => {
        setUsers(body);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>loading ...</p>
  ) : (
    <main id="user-account-container">
      {users.map((user) => {
        return (
          <article className="user-card" key={user.username}>
            <img
              className="avatar"
              src={user.avatar_url}
              alt={`avatar of ${user.username}`}
            />
            <p>{user.name}</p>
            <p>{user.username}</p>
            <button onClick={(e) => {}}>Log {isLoggedIn ? "Out" : "In"}</button>
          </article>
        );
      })}
    </main>
  );
};
export default UserAccounts;

import { useEffect, useState } from "react";
import { FetchUsers } from "./api-logic";

const UserAccounts = ({ setLoggedInUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    FetchUsers().then((body) => {
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
          <button
            key={`${user.username}-select-button`}
            onClick={(e) => {
              setLoggedInUser(user.username);
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            <article className="user-card" key={user.username}>
              <img
                className="avatar"
                src={user.avatar_url}
                alt={`avatar of ${user.username}`}
              />
              <p>{user.name}</p>
              <p>{user.username}</p>
            </article>
          </button>
        );
      })}
      <p>You're Logged {isLoggedIn ? "In!" : " Out"}</p>
    </main>
  );
};
export default UserAccounts;

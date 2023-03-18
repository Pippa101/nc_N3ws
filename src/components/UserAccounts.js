import { useEffect, useState } from "react";
import { FetchUsers } from "./api-logic";

const UserAccounts = ({ setLoggedInUser, loggedInUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

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
      <p>
        {loggedInUser
          ? `You're logged in as ${loggedInUser}`
          : "You're not logged in"}
      </p>
      {users.map((user) => {
        return (
          <button
            key={`${user.username}-select-button`}
            onClick={(e) => {
              setLoggedInUser(user.username);
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
    </main>
  );
};
export default UserAccounts;

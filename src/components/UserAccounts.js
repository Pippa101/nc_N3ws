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
    <main>
      <p>
        {loggedInUser
          ? `You're logged in as ${loggedInUser}`
          : "You're not logged in"}
      </p>
      <section id="user-account-container">
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
      </section>
    </main>
  );
};
export default UserAccounts;

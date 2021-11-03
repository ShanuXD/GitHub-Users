import "./App.css";
import React, { useState, useEffect } from "react";
import SearchUser from "./components/SearchUser";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const res = await fetch("https://api.github.com/users");
    const users = await res.json();
    if (users.length > 0) setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    // setLoading(true);
    // fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  // if (users.length === 0) {
  //   return <p>No users found</p>;
  // }

  return (
    <div className="App">
      <SearchUser onSubmit={fetchUsers} />
      {users.length > 0 && (
        <>
          <h3>Git Users</h3>
          {users.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;

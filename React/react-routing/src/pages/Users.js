import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserItem } from "../components/UserItem";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      {console.log(users)}
      <h1> Users List</h1>
      <hr />
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserItem user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

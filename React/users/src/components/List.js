import React from "react";
import { Table } from "reactstrap";

export const List = ({ users }) => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

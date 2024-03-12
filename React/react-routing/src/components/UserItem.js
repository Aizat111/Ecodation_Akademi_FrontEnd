import React from "react";
import { NavLink } from "react-router-dom";

export const UserItem = ({ user }) => {
  return (
    <tr className="border border-bottom-1">
      <td>
        {" "}
        <NavLink
          className={"text-decoration-none text-dark cursor-pointer"}
          to={`/user/${user.id}`}
        >
          {" "}
          {user.name}{" "}
        </NavLink>
      </td>

      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  );
};

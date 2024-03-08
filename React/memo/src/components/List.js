import React, { memo } from "react";

const List = ({ userList }) => {
  console.log("Rendering: List Component!");
  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {userList.map((item) => {
          return (
            <li
              style={{ border: "1px solid black", padding: 20 }}
              key={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default memo(List);

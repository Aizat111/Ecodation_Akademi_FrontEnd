import React, { memo } from "react";

const Header = (props) => {
  console.log("Rendering: Header Component!");
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <img
          src={props.imgPath}
          alt=""
          style={{ width: "100%", height: 200 }}
        ></img>
      </div>
    </div>
  );
};
export default memo(Header);

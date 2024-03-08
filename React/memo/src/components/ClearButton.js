import React, { memo } from "react";

const ClearButton = ({ handleClear }) => {
  console.log("Rendering:  Clear button");
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <button onClick={handleClear}>Clear Search</button>
      </div>
    </div>
  );
};

export default memo(ClearButton);

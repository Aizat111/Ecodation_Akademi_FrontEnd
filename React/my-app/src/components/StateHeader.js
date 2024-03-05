import React, { useState } from "react";

export const StateHeader = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Merhaba {name}</h1>
      <input
        placeholder="İsminizi Giriniz"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

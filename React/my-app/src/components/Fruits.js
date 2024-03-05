import React, { useState } from "react";

export const Fruits = () => {
  const [fruits, setFruits] = useState(["Elma", "Nar", "Karpuz"]);
  return (
    <div>
      <h1>Meyveler</h1>
      <ul>
        {fruits.map((fruit) => {
          return <li>{fruit}</li>;
        })}
      </ul>

      <br></br>
      <input
        placeholder="Meyve giriniz"
        // onChange={(e) => {
        //   setFruits([...fruits, e.target.value]);
        // }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setFruits([...fruits, e.target.value]);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

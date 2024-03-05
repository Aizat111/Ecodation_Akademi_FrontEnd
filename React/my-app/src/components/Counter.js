import React, { useEffect, useState } from "react";
export const Counter = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("lorem");

  useEffect(() => {
    // console.log("Component Mount Edildi");
    console.log("Numberin değeri: ", number);
    console.log("Textin değeri: ", text);

    //optional
    // return () => {
    //   console.log("Component unmount edildi");
    // };
  }, [number, text]);

  const increase = () => {
    setNumber(number + 1);
  };
  const descrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>Arttır</button>{" "}
      <button onClick={descrease}>Azalt</button>
      <h2>{text}</h2>
      <button onClick={() => setText("Text değiştirildi")}>
        Texti değiştir
      </button>
    </div>
  );
};

import React from "react";
import styles from "./styles.module.css";

export const Text2 = () => {
  console.log("Text2 : ", styles);
  return (
    <div>
      <h1 className={styles.text}>Text2</h1>
    </div>
  );
};

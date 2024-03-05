import React from "react";
import styles from "./styles.module.css";
export const Text1 = () => {
  console.log("Text1 : ", styles);
  return (
    <div>
      <h1 className={styles.text}> Text 1</h1>
    </div>
  );
};

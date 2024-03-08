import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import hey from "./assets/undraw_hey_email_liaa.svg";
import travel from "./assets/undraw_travel_booking_re_6umu.svg";
import axios from "axios";
import List from "./components/List";
import ClearButton from "./components/ClearButton";

function App() {
  const [count, setCount] = useState(0);
  const [imgPath, setImgPath] = useState(hey);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
      setUserList(data)
    );
  }, []);
  const increase = () => {
    setCount(count + 1);
  };
  const changeImage = () => {
    setImgPath(travel);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const clearSearch = useCallback(() => {
    setText("");
    setSearch("");
  }, []);

  const filteredUsers = useMemo(
    () =>
      userList.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, userList]
  );
  return (
    <div>
      <Header imgPath={imgPath} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 20,
        }}
      >
        <button onClick={changeImage} style={{ marginBottom: 10 }}>
          Click me to change image!
        </button>
        <button onClick={increase}>Click me to increase subscribes!</button>
        <p>Subscribes Person Count : {count} </p>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>User List</h1>
      </div>
      <hr></hr>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input value={text} onChange={handleText} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <List userList={filteredUsers} />
      <ClearButton handleClear={clearSearch} />
    </div>
  );
}

export default App;

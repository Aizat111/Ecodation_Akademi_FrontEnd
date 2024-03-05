import "./App.css";
import { Counter } from "./components/Counter";
import { Fruits } from "./components/Fruits";
import Header from "./components/Header";
import { StateHeader } from "./components/StateHeader";
import { Text1 } from "./components/Text1/Text1";
import { Text2 } from "./components/Text2/Text2";

function App() {
  const name = "Aizat";
  const isActive = true;
  const address = {
    title: "mckdfcjkdfcn",
    zip: 1223,
  };
  return (
    <div className="App">
      {/* <h1>Merhaba React</h1> */}
      {/* <Header name={"Pokemon"} isActive={true} address={address} /> */}
      <Counter />
      {/* <StateHeader /> */}
      {/* <Fruits /> */}
      {/* <Text1 />
      <Text2 /> */}
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer);
  };

  return (
    <>
      <h1> Hello! </h1>
      <h2> What tasks do you need to do today? </h2>
      <form onSubmit={handleSubmit}>
        <label> Answer: </label>
        {/* With onChange, keep track of user changing their answers*/}
        <input type="text" onChange={(e) => setAnswer(e.target.value)}></input>
        <br />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}

export default App;

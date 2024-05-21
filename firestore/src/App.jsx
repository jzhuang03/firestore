import { useState } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function App() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "answers"), {
      answer: answer,
    });
    console.log("created doc with id: ", docRef.id);
  };

  return (
    <>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <label> Answer:</label>
        <input type="text" onChange={(e) => setAnswer(e.target.value)}></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

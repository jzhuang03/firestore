import { useState, useEffect } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

function App() {
  const [answer, setAnswer] = useState("");
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  {
    /* Take the answers that the user has submitted*/
  }
  useEffect(() => {
    const fetchAnswers = async () => {
      const returnAnswer = await getDocs(collection(db, "answers"));
      const answers = returnAnswer.docs.map((doc) => doc.data());
      setSubmittedAnswers(answers);
    };

    fetchAnswers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "answers"), {
      answer: answer,
    });
    console.log("created doc with id: ", docRef.id);

    {
      /* For each answer that the user has submitted, assign ID to the answer for display purposes */
    }
    setSubmittedAnswers([
      ...submittedAnswers,
      { id: docRef.id, answer: answer },
    ]);
    setAnswer("");
  };

  return (
    <>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <label> Answer:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>

      {/* Display the answers that the user has submitted*/}
      <div className="display">
        <h2>Submitted Answers:</h2>
        <ul>
          {submittedAnswers.map((submittedAnswer) => (
            <li key={submittedAnswer.id}>{submittedAnswer.answer}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

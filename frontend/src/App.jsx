import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/login")
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.error("Error fetching message:", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Chat App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

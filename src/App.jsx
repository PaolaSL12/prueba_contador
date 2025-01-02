import Button from "../components/Button/Button";
import Message from "../components/Message/Message";
import Score from "../components/Score/Score";
import { handelReset, handleDecrement, handleIncrement } from "../Logic";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="app">
      <div className="counterBox">
        {message && <Message text={message}/> }
        <Score counter={counter} />
        <div className="buttons">
          <Button funct={() => handleDecrement(counter, setCounter, setMessage)} className={"decrement"} text={"-"} />
          <Button funct={() => handleIncrement(counter, setCounter, setMessage)} className={"increment"} text={"+"} />
        </div>
        <Button funct={() => handelReset(setCounter, setMessage)} className={"reset"} text={"RESET"} />
      </div>
    </div>
  );
}

export default App;

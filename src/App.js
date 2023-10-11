import { useEffect, useState } from "react";
import './App.css';
import Astronaut from "./astronaut";
import TypingText from "./TypingText";

function App() {
  const[activity, setActivity] = useState("");

  useEffect( () =>{
    getActivity();
}, [])

const getActivity = async () =>{
  const response = await fetch("https://www.boredapi.com/api/activity/");
  const data = await response.json();
  setActivity(data.activity)
}

  return (

    <div className="App">
      <TypingText text={activity}/>
      <button onClick={getActivity}>
        Give me another idea
      </button>
      <Astronaut/>
    </div>

  );
}

export default App;

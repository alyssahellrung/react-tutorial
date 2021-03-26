import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    {name: "Ed", message: "Hello there", likes: "12 likes"},
    {name: "John", message: "I am John Snow.", likes: "100 likes"},
    {name: "Alyssa", message: "React is fun", likes: "4000 likes"}
  ]);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

  return(
    <div className="app">
      {/* <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  );
}

export default App;
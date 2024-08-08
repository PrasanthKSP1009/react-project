import { useState } from "react";

const Home = () => {
  var initaialCount = 0;
  var [count, setCount] = useState(initaialCount);
  var [text, setText] = useState("");
  return (
    <div>
      <h1>Home</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
      <button onClick={() => setCount(initaialCount)}>Reset</button>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>The Text is {text}</h3>
    </div>
  );
};

export default Home;

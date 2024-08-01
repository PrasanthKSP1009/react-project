import { useState } from "react";

const Home = () => {
    var [count,setCount] = useState(0);
    return (
    <div>
      <h1>Home</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Add 1</button>
    </div>
  );
};

export default Home;

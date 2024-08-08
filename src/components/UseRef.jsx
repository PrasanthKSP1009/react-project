import { useState, useRef, useEffect } from "react";

var UseRef = () => {
  var [num, setNum] = useState("");
  var prevNum = useRef(num);
  useEffect(()=>{
    console.log(prevNum);
    prevNum.current = num
  })
  return (
    <div>
      <h1>Example of UseRef</h1>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <h2>Current Render is {num}</h2>
      <h3>Previous Render is {prevNum.current}</h3>
    </div>
  );
};
export default UseRef;

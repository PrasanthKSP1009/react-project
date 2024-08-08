import React, { useState, useRef, useEffect } from "react";

var FuncComp = (props) => {
  var [text,setText] = useState("");
  var prevText = useRef(text);
  useEffect(()=>{
    prevText.current = text
  })
 
  return (
    <div>
      <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
      <h1>the text is {text} and previous text is {prevText.current}</h1>
    </div>
  );
};
export default FuncComp;

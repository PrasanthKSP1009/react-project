import { useEffect, useState } from "react";
import axios from "axios";

function SideEffects() {
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>Axios Data Getting</h1>
      <ol>
        {post.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ol>
    </div>
  );
}
export default SideEffects;

import React, { useState } from "react";
import axios from 'axios'

function SignupForm() {
  const [username, setUName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  async function finish(event){
    event.preventDefault()
    const req = await axios.post("http://localhost:3001/signup",({
      username:username,
      name:name,
      email:email,
      password:password,
    }))
    console.log(req);
    if(req.messaage === "User Added"){
      setResponseMessage("Successful")
    }
    else{
      setResponseMessage("Unsuccessful")
    }
  }
  return (
    <form onSubmit={finish}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          id="uname"
          value={username}
          onChange={(e) => setUName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
      <p className="error-message">{responseMessage}</p>
    </form>
  );
}

export default SignupForm;

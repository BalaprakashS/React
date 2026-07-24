import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  const saveData = () => {
    setUser(name);
    setName("");
  };

  return (
    <>
      <h1>User Form</h1>

      <label>Enter Name:</label>
      <br />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
    

      <button onClick={saveData}>Summit</button>

      <br />
      

      <h3>{user}</h3>
    </>
  );
};

export default App;
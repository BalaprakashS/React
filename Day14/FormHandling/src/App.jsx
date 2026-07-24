import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [saveData, setSaveData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveData(data);
    setData("");
  };

  return (
    <>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h3>{saveData}</h3>
    </>
  );
};

export default App;
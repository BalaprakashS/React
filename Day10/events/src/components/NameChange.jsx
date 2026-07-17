import { useState } from "react";

const NameChange = () => {

  const [name, setName] = useState("Sudhan");

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Task 2 - Name Change</h2>

      <h1 className="text-4xl font-bold text-green-600 mb-5">
        {name}
      </h1>

      <button
        onClick={() => setName("React Developer")}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Change Name
      </button>
    </div>
  );
};

export default NameChange;
import { useState } from "react";

const Array = () => {
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Orange",
  ]);

  const handleClick = () => {
    setFruits([
      "Banana",
      "Grapes",
      "Pineapple",
    ]);
  };

  return (
    <div className="border p-5 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">
        Array Example
      </h1>

      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <button
        onClick={handleClick}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Change Fruits
      </button>
    </div>
  );
};

export default Array;
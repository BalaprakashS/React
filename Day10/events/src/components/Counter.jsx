import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Task 1 - Counter</h2>

      <h1 className="text-5xl font-bold text-blue-600 mb-5">
        {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
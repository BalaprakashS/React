import { useState } from "react";

const Object = () => {
  const [student, setStudent] = useState({
    name: "Bala",
    age: 21,
    course: "React",
  });

  const handleClick = () => {
    setStudent({
      name: "Prakash",
      age: 22,
      course: "Full Stack",
    });
  };

  return (
    <div className="border p-5 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">
        Object Example
      </h1>

      <h2>Name: {student.name}</h2>
      <h2>Age: {student.age}</h2>
      <h2>Course: {student.course}</h2>

      <button
        onClick={handleClick}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Change Student
      </button>
    </div>
  );
};

export default Object;
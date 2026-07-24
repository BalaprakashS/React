import { useState } from "react";

const App = () => {
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "JavaScript",
  });

  const handleClick = () => {
    setStudent({
      ...student,
      course: "React",
      name: "vijay",
    });
  };

  return (
    <div>
      <h1>Object Example</h1>

      <h2>Name: {student.name}</h2>
      <h2>Course: {student.course}</h2>

      <button onClick={handleClick}>
        Change Course
      </button>
    </div>
  );
};

export default App;
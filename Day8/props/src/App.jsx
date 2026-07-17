import StudentCard from "./components/StudentCard";
import EmployeeCard from "./components/EmployeeCard";
import StudentList from "./components/StudentList";

const App = () => {

  // Task 2 - Object
  const employee = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Chennai",
    experience: "3 Years",
  };

  // Task 3 - Array Of Objects
  const students = [
    {
      id: 1,
      name: "Sudhan",
      course: "React",
    },
    {
      id: 2,
      name: "Rahul",
      course: "MERN",
    },
    {
      id: 3,
      name: "Vijay",
      course: "Node",
    },
    {
      id: 4,
      name: "Ajay",
      course: "Python",
    },
    {
      id: 5,
      name: "Priya",
      course: "Java",
    },
  ];

  return (
    <div className="p-8 space-y-8">

      <h1 className="text-4xl font-bold text-center">
        React Props
      </h1>

      {/* Task 1 */}
      <StudentCard
        name="Sudhan"
        age={25}
        course="React"
        isPlaced={true}
      />

      {/* Task 2 */}
      <EmployeeCard employee={employee} />

      {/* Task 3 */}
      <StudentList students={students} />

    </div>
  );
};

export default App;
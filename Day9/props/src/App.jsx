import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Student from "./components/Student";
import Employee from "./components/Employee";
import Product from "./components/Product";
import Movie from "./components/Movie";
import StudentList from "./components/StudentList";

function App() {

  const employee = {
    name: "Rahul",
    email: "rahul@gmail.com",
    department: "Developer",
  };

  const movies = ["Vijay", "Ajith", "Suriya"];

  const students = [
    { id: 1, name: "Sudhan", course: "React" },
    { id: 2, name: "Rahul", course: "MERN" },
    { id: 3, name: "Vijay", course: "Node" },
  ];

  return (
    <>
      <Navbar />

      <div className="p-6">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/student"
            element={
              <Student
                name="Sudhan"
                age={25}
                course="React"
              />
            }
          />

          <Route
            path="/employee"
            element={<Employee employee={employee} />}
          />

          <Route
            path="/product"
            element={
              <Product
                productName="Laptop"
                price={65000}
                inStock={true}
              />
            }
          />

          <Route
            path="/movie"
            element={<Movie movies={movies} />}
          />

          <Route
            path="/studentlist"
            element={<StudentList students={students} />}
          />

        </Routes>

      </div>
    </>
  );
}

export default App;
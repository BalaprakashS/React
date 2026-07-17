// import Array from "./components/Array";
// import Object from "./components/Object";

// const App = () => {
//   return (
//     <div className="p-10 space-y-10">
//       <Array />
//       <Object />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const Array = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

//   const handleClick = () => {
//     const newNumbers = [...numbers];
//     newNumbers[2] = 7; // Replace 3 (index 2) with 7
//     setNumbers(newNumbers);
//   };

//   return (
//     <div>
//       <h1>Array Example</h1>

//       {numbers.map((num, index) => (
//         <p key={index}>{num}</p>
//       ))}

//       <button onClick={handleClick}>
//         click
//       </button>
//     </div>
//   );
// };

// export default Array;

import { useState } from "react";

const App = () => {
  // Task 1
  const [heroes, setHeroes] = useState(["Vijay", "Ajith", "Suriya"]);

  // Task 2
  const [fruits, setFruits] = useState(["Apple", "Orange", "Mango"]);

  // Task 3
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "JS",
  });

  // Task 4
  const [company, setCompany] = useState({
    company: "Google",
    city: "Chennai",
  });

  // Task 5
  const [students, setStudents] = useState([
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Rahul" },
  ]);

  // Task 6
  const [products, setProducts] = useState([
    { id: 1, name: "Mobile" },
    { id: 2, name: "Laptop" },
  ]);

  // Task 7
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arun" },
    { id: 2, name: "Kumar" },
  ]);

  // Task 1
  const changeHero = () => {
    const newHeroes = [...heroes];
    newHeroes[1] = "SK";
    setHeroes(newHeroes);
  };

  // Task 2
  const updateFruit = () => {
    const newFruits = [...fruits];
    newFruits[1] = "Banana";
    setFruits(newFruits);
  };

  // Task 3
  const updateCourse = () => {
    setStudent({
      ...student,
      course: "React",
    });
  };

  // Task 4
  const updateCompany = () => {
    setCompany({
      ...company,
      company: "Microsoft",
    });
  };

  // Task 5
  const updateStudent = () => {
    const updatedStudents = students.map((student) =>
      student.id === 2 ? { ...student, name: "Vijay" } : student
    );
    setStudents(updatedStudents);
  };

  // Task 6
  const updateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === 2 ? { ...product, name: "Tablet" } : product
    );
    setProducts(updatedProducts);
  };

  // Task 7
  const editEmployee = () => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === 2 ? { ...employee, name: "Vignesh" } : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Task 1 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 1</h2>

        {heroes.map((hero, index) => (
          <p key={index}>{hero}</p>
        ))}

        <button
          onClick={changeHero}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Change Hero
        </button>
      </div>

      {/* Task 2 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 2</h2>

        {fruits.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))}

        <button
          onClick={updateFruit}
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Fruit
        </button>
      </div>

      {/* Task 3 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 3</h2>

        <p>Name : {student.name}</p>
        <p>Course : {student.course}</p>

        <button
          onClick={updateCourse}
          className="mt-3 bg-purple-500 text-white px-4 py-2 rounded"
        >
          Update Course
        </button>
      </div>

      {/* Task 4 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 4</h2>

        <p>Company : {company.company}</p>
        <p>City : {company.city}</p>

        <button
          onClick={updateCompany}
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
        >
          Update Company
        </button>
      </div>

      {/* Task 5 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 5</h2>

        {students.map((student) => (
          <p key={student.id}>
            {student.id} - {student.name}
          </p>
        ))}

        <button
          onClick={updateStudent}
          className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Update Student
        </button>
      </div>

      {/* Task 6 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 6</h2>

        {products.map((product) => (
          <p key={product.id}>
            {product.id} - {product.name}
          </p>
        ))}

        <button
          onClick={updateProduct}
          className="mt-3 bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Update Product
        </button>
      </div>

      {/* Task 7 */}
      <div className="border p-5 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Task 7</h2>

        {employees.map((employee) => (
          <p key={employee.id}>
            {employee.id} - {employee.name}
          </p>
        ))}

        <button
          onClick={editEmployee}
          className="mt-3 bg-pink-500 text-white px-4 py-2 rounded"
        >
          Edit Employee
        </button>
      </div>
    </div>
  );
};

export default App;
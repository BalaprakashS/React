import React from "react";

// ======================
// Task 1 - String Rendering
// ======================
const Task1 = () => {
  const course = "React JS";

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-blue-600 mb-3">
        Task 1 - String Rendering
      </h2>

      <h1 className="text-2xl font-semibold">{course}</h1>
    </div>
  );
};

// ======================
// Task 2 - Number Rendering
// ======================
const Task2 = () => {
  const price = 50000;
  const discount = 5000;

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-green-600 mb-3">
        Task 2 - Number Rendering
      </h2>

      <p className="text-lg">Price : ₹{price}</p>
      <p className="text-lg">Discount : ₹{discount}</p>
    </div>
  );
};

// ======================
// Task 3 - Boolean Rendering
// ======================
const Task3 = () => {
  const isLogin = true;

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-purple-600 mb-3">
        Task 3 - Boolean Rendering
      </h2>

      <h3 className="text-lg font-medium">
        {isLogin ? "Welcome User" : "Please Login"}
      </h3>
    </div>
  );
};


// ======================
// Task 4 - Null Rendering
// ======================
const Task4 = () => {
  const profileImage = null;

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-orange-600 mb-3">
        Task 4 - Null Rendering
      </h2>

      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />
      ) : (
        <p className="text-red-500 font-medium">No Image Found</p>
      )}
    </div>
  );
};

// ======================
// Task 5 - Undefined Rendering
// ======================
const Task5 = () => {
  const email = undefined;

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-pink-600 mb-3">
        Task 5 - Undefined Rendering
      </h2>

      <p className="text-lg">
        {email ? email : "Email Not Available"}
      </p>
    </div>
  );
};

// ======================
// Task 6 - Function Rendering
// ======================
const Task6 = () => {
  const getCompanyName = () => {
    return "Google";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-cyan-600 mb-3">
        Task 6 - Function Rendering
      </h2>

      <h3 className="text-2xl font-semibold">
        {getCompanyName()}
      </h3>
    </div>
  );
};

// ======================
// Task 7 - Array Rendering
// ======================
const Task7 = () => {
  const heroes = ["Vijay", "Ajith", "Suriya", "SK", "Dhanush"];

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-indigo-600 mb-3">
        Task 7 - Array Rendering
      </h2>

      <ul className="space-y-2">
        {heroes.map((hero, index) => (
          <li
            key={index}
            className="bg-blue-100 p-3 rounded-lg"
          >
            {hero}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ======================
// Task 8 - Object Rendering
// ======================
const Task8 = () => {
  const trainer = {
    name: "Bala",
    course: "React JS",
    experience: "3 Years",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-green-600 mb-3">
        Task 8 - Object Rendering
      </h2>

      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-lg">
          <b>Name :</b> {trainer.name}
        </p>

        <p className="text-lg">
          <b>Course :</b> {trainer.course}
        </p>

        <p className="text-lg">
          <b>Experience :</b> {trainer.experience}
        </p>
      </div>
    </div>
  );
};

// ======================
// Task 9 - Array Of Objects
// ======================
const Task9 = () => {
  const students = [
    {
      id: 1,
      name: "Arun",
      course: "React",
    },
    {
      id: 2,
      name: "Priya",
      course: "Python",
    },
    {
      id: 3,
      name: "Karthik",
      course: "Java",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-red-600 mb-3">
        Task 9 - Array Of Objects
      </h2>

      <table className="w-full border border-gray-300">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="text-center hover:bg-gray-100"
            >
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ======================
// Task 10 - Mixed Rendering
// ======================
const Task10 = () => {
  const company = "Google";
  const totalEmployees = 2500;
  const isHiring = true;

  const ceo = {
    name: "Sundar Pichai",
    age: 53,
  };

  const departments = [
    "HR",
    "Development",
    "Testing",
    "Support",
    "Finance",
  ];

  const employees = [
    { id: 101, name: "Rahul", department: "Development" },
    { id: 102, name: "Priya", department: "Testing" },
    { id: 103, name: "Arun", department: "HR" },
  ];

  const getLocation = () => {
    return "Chennai";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold text-purple-600 mb-4">
        Task 10 - Mixed Rendering
      </h2>

      <p><b>Company :</b> {company}</p>
      <p><b>Total Employees :</b> {totalEmployees}</p>
      <p><b>Hiring :</b> {isHiring ? "Yes" : "No"}</p>
      <p><b>Location :</b> {getLocation()}</p>

      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">CEO Details</h3>
        <p>Name : {ceo.name}</p>
        <p>Age : {ceo.age}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-lg mb-2">Departments</h3>

        <ul className="list-disc ml-6">
          {departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="font-bold text-lg mb-2">Employees</h3>

        <table className="w-full border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Department</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{emp.id}</td>
                <td className="border p-2">{emp.name}</td>
                <td className="border p-2">{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ======================
// Bonus Dashboard
// ======================
const Dashboard = () => {
  const company = "Google";
  const totalEmployees = 2500;
  const activeEmployees = 2200;
  const isHiring = true;

  const ceo = {
    name: "Sundar Pichai",
    role: "Chief Executive Officer",
  };

  const departments = [
    "HR",
    "Development",
    "Testing",
    "Support",
  ];

  const employees = [
    { id: 1, name: "Rahul", department: "Development" },
    { id: 2, name: "Priya", department: "Testing" },
    { id: 3, name: "Arun", department: "HR" },
  ];

  const getLocation = () => "California";

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Company Dashboard
      </h2>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <h3 className="font-bold">Company</h3>
          <p>{company}</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <h3 className="font-bold">Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="bg-purple-500 text-white p-4 rounded-lg text-center">
          <h3 className="font-bold">Active</h3>
          <p>{activeEmployees}</p>
        </div>

        <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
          <h3 className="font-bold">Hiring</h3>
          <p>{isHiring ? "Open" : "Closed"}</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 mb-5">
        <h3 className="font-bold text-lg mb-2">CEO Details</h3>
        <p>Name : {ceo.name}</p>
        <p>Role : {ceo.role}</p>
        <p>Location : {getLocation()}</p>
      </div>

      <div className="mb-5">
        <h3 className="font-bold text-lg mb-2">Departments</h3>

        <ul className="list-disc ml-6">
          {departments.map((dept, index) => (
            <li key={index}>{dept}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-2">Employee Table</h3>

        <table className="w-full border border-gray-300">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Department</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{emp.id}</td>
                <td className="border p-2">{emp.name}</td>
                <td className="border p-2">{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        React Rendering Tasks
      </h1>

      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
      <Task8 />
      <Task9 />
      <Task10 />

      <Dashboard />
    </div>
  );
};

export default App;

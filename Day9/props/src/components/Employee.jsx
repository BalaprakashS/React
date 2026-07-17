function Employee({ employee }) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Employee 
      </h2>

      <p>Name : {employee.name}</p>

      <p>Email : {employee.email}</p>

      <p>Department : {employee.department}</p>

    </div>
  );
}

export default Employee;
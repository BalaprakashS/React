const EmployeeCard = ({ employee }) => {
  return (
    <div className="border rounded-lg p-5 shadow">

      <h2 className="text-2xl font-bold mb-4">
        Task 2 - Object Props
      </h2>

      <p>
        <strong>Name :</strong> {employee.name}
      </p>

      <p>
        <strong>Email :</strong> {employee.email}
      </p>

      <p>
        <strong>City :</strong> {employee.city}
      </p>

      <p>
        <strong>Experience :</strong> {employee.experience}
      </p>

    </div>
  );
};

export default EmployeeCard;
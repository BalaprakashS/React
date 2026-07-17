const StudentCard = ({ name, age, course, isPlaced }) => {
  return (
    <div className="border rounded-lg p-5 shadow">

      <h2 className="text-2xl font-bold mb-4">
        Task 1 - Primitive Props
      </h2>

      <p>
        <strong>Name :</strong> {name}
      </p>

      <p>
        <strong>Age :</strong> {age}
      </p>

      <p>
        <strong>Course :</strong> {course}
      </p>

      <p>
        <strong>Status :</strong>{" "}
        {isPlaced ? "Placed" : "Not Placed"}
      </p>

    </div>
  );
};

export default StudentCard;
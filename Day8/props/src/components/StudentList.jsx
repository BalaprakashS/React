const StudentList = ({ students }) => {
  return (
    <div className="border rounded-lg p-5 shadow">

      <h2 className="text-2xl font-bold mb-4">
        Task 3 - Array Of Objects Props
      </h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.id} - {student.name} - {student.course}
        </p>
      ))}

    </div>
  );
};

export default StudentList;
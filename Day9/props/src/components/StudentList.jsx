function StudentList({ students }) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Student List 
      </h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.id} -
          {student.name} -
          {student.course}
        </p>
      ))}

    </div>
  );
}

export default StudentList;
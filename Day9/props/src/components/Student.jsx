function Student({ name, age, course }) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Student 
      </h2>

      <p>Name : {name}</p>

      <p>Age : {age}</p>

      <p>Course : {course}</p>

    </div>
  );
}

export default Student;
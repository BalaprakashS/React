import { useState } from "react";

const CourseUpdate = () => {

  const [course, setCourse] = useState("JavaScript");

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">
        Task 5 - Course Update
      </h2>

      <h1 className="text-4xl font-bold text-red-600 mb-5">
        {course}
      </h1>

      <button
        onClick={() => setCourse("React JS")}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Update Course
      </button>

      {course === "React JS" && (
        <p className="text-green-600 font-semibold mt-4">
           Course Updated Successfully!
        </p>
      )}
    </div>
  );
};

export default CourseUpdate;
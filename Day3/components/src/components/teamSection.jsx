import team1 from "../assets/team1.avif";
import team2 from "../assets/team2.avif";
import team3 from "../assets/team3.webp";
import team4 from "../assets/team4.webp";

const TeamSection = () => {

  const teamMembers = [
    {
      id: 1,
      image: team1,
      name: "Rahul",
      designation: "Frontend Developer",
    },
    {
      id: 2,
      image: team2,
      name: "Vijay",
      designation: "Backend Developer",
    },
    {
      id: 3,
      image: team3,
      name: "Priya",
      designation: "UI/UX Designer",
    },
    {
      id: 4,
      image: team4,
      name: "Ajay",
      designation: "Full Stack Developer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Team Members
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {teamMembers.map((member) => (

          <div
            key={member.id}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
          >

            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-500"
            />

            <h2 className="text-2xl font-bold mt-5">
              {member.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {member.designation}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TeamSection;
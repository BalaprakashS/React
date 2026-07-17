import profile from "../assets/profile.png";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">

      <div className="bg-white p-3 rounded-xl shadow-xl text-center w-100">

        <img
          src={profile}
          alt="Profile"
          className="w-[500px] h-[400px] rounded-[10px] mx-auto object-cover"
        />

        <h2 className="text-2xl font-bold mt-5">
          Bala Prakash
        </h2>

        <p className="text-gray-600 mt-2">
          React Developer
        </p>

      </div>

    </div>
  );
};

export default ProfileCard;
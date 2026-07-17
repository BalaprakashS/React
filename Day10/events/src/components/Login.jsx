import { useState } from "react";

const LoginStatus = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">
        Task 3 - Login Status
      </h2>

      <h1 className="text-4xl font-bold text-purple-600 mb-5">
        {isLoggedIn ? "Welcome User" : "Please Login"}
      </h1>

      <button
        onClick={() => setIsLoggedIn(true)}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Login
      </button>

      {isLoggedIn && (
        <p className="text-green-600 font-semibold mt-4">
          Login Successfully!
        </p>
      )}
    </div>
  );
};

export default LoginStatus;
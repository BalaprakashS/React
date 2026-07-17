const Button = () => {
  const handleClick = () => {
    alert("🎉 Button Clicked!");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
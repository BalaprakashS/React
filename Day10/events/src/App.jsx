import Counter from "./components/Counter";
import NameChange from "./components/NameChange";
import LoginStatus from "./components/Login";
import ThemeStatus from "./components/ThemeStatus";
import CourseUpdate from "./components/CourseUpdate";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-8">
      <Counter />
      <NameChange />
      <LoginStatus />
      <ThemeStatus />
      <CourseUpdate />
    </div>
  );
};

export default App;
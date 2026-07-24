const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-5xl font-bold text-center mb-8">
        About Project
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-5">
            TrendSphere
        </h2>

        <p className="mb-3">
          This project displays the latest trending news related to
          Artificial Intelligence, NEET, Cricket and ISRO.
        </p>

        <p className="mb-3">
          It is built using React Vite with dynamic rendering.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Technologies Used
        </h2>

        <ul className="list-disc ml-8 space-y-2">

          <li>React JS</li>

          <li>Vite</li>

          <li>React Router DOM</li>

          <li>Tailwind CSS</li>

          <li>React Icons</li>

          <li>React Hooks</li>

          <li>Local Storage</li>

          <li>Dynamic Rendering</li>

        </ul>

      </div>

    </div>
  );
};

export default About;
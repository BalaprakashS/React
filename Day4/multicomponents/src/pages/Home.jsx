import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Cards";

function Home() {
  const cards = [
    {
      title: "React",
      description: "Build interactive user interfaces easily.",
    },
    {
      title: "Vite",
      description: "Fast development server and optimized builds.",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
    },
  ];

  return (
    <>
      <Navbar />

      <Banner />

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
function Cards() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Cards</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "220px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h3>React</h3>
          <p>Learn React Components and JSX.</p>
          <button>Read More</button>
        </div>

        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "220px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h3>JavaScript</h3>
          <p>Master ES6, DOM, Events and APIs.</p>
          <button>Read More</button>
        </div>

        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "220px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h3>HTML & CSS</h3>
          <p>Create responsive and attractive websites.</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0d6efd",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h2>My Website</h2>

      <div>
        <a href="#" style={{ color: "white", margin: "15px" }}>Home</a>
        <a href="#" style={{ color: "white", margin: "15px" }}>Story</a>
        <a href="#" style={{ color: "white", margin: "15px" }}>Form</a>
        <a href="#" style={{ color: "white", margin: "15px" }}>Table</a>
        <a href="#" style={{ color: "white", margin: "15px" }}>Cards</a>
      </div>
    </nav>
  );
}

export default Navbar;
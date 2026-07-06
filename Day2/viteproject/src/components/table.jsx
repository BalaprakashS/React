function Table() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Table</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          <tr><td>1</td><td>Bala</td><td>CSE</td><td>Chennai</td></tr>
          <tr><td>2</td><td>Arun</td><td>IT</td><td>Madurai</td></tr>
          <tr><td>3</td><td>Rahul</td><td>ECE</td><td>Coimbatore</td></tr>
          <tr><td>4</td><td>Vignesh</td><td>EEE</td><td>Salem</td></tr>
          <tr><td>5</td><td>Karthik</td><td>CSE</td><td>Trichy</td></tr>
          <tr><td>6</td><td>Priya</td><td>IT</td><td>Chennai</td></tr>
          <tr><td>7</td><td>Anjali</td><td>ECE</td><td>Tirunelveli</td></tr>
          <tr><td>8</td><td>Surya</td><td>MECH</td><td>Erode</td></tr>
          <tr><td>9</td><td>Deepak</td><td>CIVIL</td><td>Vellore</td></tr>
          <tr><td>10</td><td>Paari</td><td>CSE</td><td>Thanjavur</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
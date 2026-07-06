function Form() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student Registration Form</h2>

      <form
        style={{
          display: "inline-block",
          textAlign: "left",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "320px",
        }}
      >
        <label>Name</label>
        <br />
        <input type="text" placeholder="Enter Name" style={{ width: "100%" }} />
        <br /><br />

        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter Email" style={{ width: "100%" }} />
        <br /><br />

        <label>Phone Number</label>
        <br />
        <input type="tel" placeholder="Enter Phone Number" style={{ width: "100%" }} />
        <br /><br />

        <label>Department</label>
        <br />
        <select style={{ width: "100%" }} defaultValue="">
        <option value="" disabled>
            Select Department
        </option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="MECH">MECH</option>
        </select>
        <br /><br />

        <label>Gender</label>
        <br />
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" style={{ marginLeft: "15px" }} /> Female
        <br /><br />

        <label>Address</label>
        <br />
        <textarea
          rows="3"
          placeholder="Enter Address"
          style={{ width: "100%" }}
        ></textarea>
        <br /><br />

        <button type="submit">Submit</button>
        <button
          type="reset"
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
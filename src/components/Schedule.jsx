function Schedule() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Today's Study Schedule 📅</h2>

      <div
        style={{
          backgroundColor: "#fff4e6",
          width: "300px",
          margin: "20px auto",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
        }}
      >
        <p>📘 DBMS - 2 hrs</p>
        <p>📘 ADA - 1 hr</p>
        <p>📘 Java - 2 hrs</p>
      </div>

      <p
        style={{
          marginTop: "20px",
          color: "#6C63FF",
          fontWeight: "bold",
          fontSize: "18px"
        }}
      >
        “Small progress each day adds up to big success.” 🚀
      </p>
    </div>
  );
}

export default Schedule;
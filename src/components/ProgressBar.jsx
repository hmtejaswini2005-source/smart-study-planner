function ProgressBar() {
  const progress = 70;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Study Progress 📈</h2>

      <div
        style={{
          width: "300px",
          height: "30px",
          backgroundColor: "#ddd",
          margin: "20px auto",
          borderRadius: "20px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#6C63FF",
            textAlign: "center",
            color: "white",
            lineHeight: "30px"
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
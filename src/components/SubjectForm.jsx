import { useState } from "react";

function SubjectForm() {
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  const addSubject = () => {
    if (subject !== "") {
      setSubjects([...subjects, subject]);
      setSubject("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={addSubject}
        style={{
          padding: "10px",
          backgroundColor: "#6C63FF",
          color: "white",
          border: "none"
        }}
      >
        Add Subject
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Subjects</h3>

        {subjects.map((item, index) => (
          <div
  key={index}
  style={{
    backgroundColor: "#f0f0ff",
    margin: "10px auto",
    padding: "10px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
  }}
>
  📘 {item}
</div>
        ))}
      </div>
    </div>
  );
}

export default SubjectForm;
import Navbar from "./components/Navbar";
import SubjectForm from "./components/SubjectForm";
import Schedule from "./components/Schedule";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f5f7ff",
        minHeight: "100vh",
        paddingBottom: "40px",
        fontFamily: "Arial"
      }}
    >
      <Navbar />
      <SubjectForm />
      <Schedule />
      <ProgressBar />
    </div>
  );
}

export default App;
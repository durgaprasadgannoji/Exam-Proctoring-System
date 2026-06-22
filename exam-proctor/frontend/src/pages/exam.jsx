import { useState, useEffect } from "react";

function Exam() {
 const [timeLeft, setTimeLeft] = useState(3600);
const [violations, setViolations] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Exam Submitted Automatically");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#111827",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Remote Proctoring System</h2>

        <h2>
          ⏳ {String(mins).padStart(2, "0")}:
          {String(secs).padStart(2, "0")}
        </h2>
      </div>

<h3>Violations</h3>

<p
  style={{
    color: violations > 0 ? "red" : "lightgreen",
    fontWeight: "bold",
  }}
>
  {violations}
</p>

      <div
        style={{
          display: "flex",
        }}
      >
        {/* Question Navigator */}
        <div
          style={{
            width: "250px",
            background: "#111827",
            minHeight: "90vh",
            padding: "20px",
          }}
        >
          <h3>Questions</h3>

          <button>Q1</button>
          <br /><br />

          <button>Q2</button>
          <br /><br />

          <button>Q3</button>
          <br /><br />

          <button>Q4</button>
          <br /><br />

          <button>Q5</button>
        </div>

        {/* Question Area */}
        <div
          style={{
            flex: 1,
            padding: "40px",
          }}
        >
          <h2>Question 1</h2>

          <p>
            What is the output of:
            <br />
            console.log(2 + "2")
          </p>

          <div>
            <label>
              <input type="radio" name="q1" /> 4
            </label>

            <br /><br />

            <label>
              <input type="radio" name="q1" /> 22
            </label>

            <br /><br />

            <label>
              <input type="radio" name="q1" /> Error
            </label>
          </div>

          <br />



          <button
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Save & Next
          </button>
        </div>

        {/* Proctor Panel */}
        <div
          style={{
            width: "300px",
            background: "#111827",
            padding: "20px",
          }}
        >
          <h3>Proctor Status</h3>

          <p>📷 Camera Active</p>
          <p>🖥 Screen Sharing Active</p>
          <p>👤 Face Detected</p>
          <p>🔒 Fullscreen Active</p>
        </div>
      </div>
    </div>
  );
}

document.addEventListener(
  "visibilitychange",
  () => {
    if (document.hidden) {
      console.log(
        "⚠️ Tab Switch"
      );
    }
  }
);


export default Exam;
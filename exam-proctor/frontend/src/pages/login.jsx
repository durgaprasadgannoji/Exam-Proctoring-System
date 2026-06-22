import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);
const sendOTP = async () => {
  try {
    console.log("Sending OTP to:", email);

    const res = await axios.post(
      "http://127.0.0.1:8000/send-otp",
      null,
      {
        params: { email }
      }
    );

    console.log(res.data);

    alert("OTP Sent");
    setOtpSent(true);

  } catch (err) {
    console.error(err);
    alert("Failed to send OTP");
  }
};


const verifyOTP = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/verify-otp",
      null,
      {
        params: {
          email,
          otp
        }
      }
    );

    if (res.data.success) {

  localStorage.setItem(
    "candidateName",
    name
  );

  localStorage.setItem(
    "candidateEmail",
    email
  );

  alert("OTP Verified");

  navigate("/verification");
}else {
      alert("Invalid OTP");
    }
  } catch {
    alert("Verification failed");
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "40px",
          borderRadius: "20px",
          background: "#111111",
          border: "1px solid #333",
          boxShadow: "0px 0px 30px rgba(37,99,235,0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
          }}
        >
          Online Exam Portal
        </h1>

       <input
  type="text"
  placeholder="Candidate Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
  }}
/>

   <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
  }}
/>
<button
  onClick={sendOTP}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    background: "#2563eb",
    color: "white",
    border: "none"
  }}
>
  Send OTP
</button>

{otpSent && (
  <>
    <input
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      style={{
        width: "100%",
        padding: "14px",
        marginBottom: "15px"
      }}
    />

    <button
      onClick={verifyOTP}
      style={{
        width: "100%",
        padding: "12px",
        background: "green",
        color: "white",
        border: "none"
      }}
    >
      Verify OTP
    </button>
  </>
)}

     

        <button
          onClick={() => navigate("/verification")}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Start Verification
        </button>
      </div>
    </div>
  );
}

export default Login;
import { useEffect, useState }
from "react";
import axios from "axios";

function Admin() {

  const [violations,
  setViolations] =
  useState([]);

  useEffect(() => {

    loadViolations();

    const interval =
      setInterval(
        loadViolations,
        3000
      );

    return () =>
      clearInterval(interval);

  }, []);

  const loadViolations =
  async () => {

    const res =
      await axios.get(
        "http://127.0.0.1:8000/violations"
      );

    setViolations(res.data);
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        Admin Dashboard
      </h1>

      <table border="1">

        <thead>
  <tr>
    <th>Candidate</th>
    <th>Email</th>
    <th>Violation</th>
    <th>Time</th>
  </tr>
</thead>

       <tbody>
  {violations.map((v, index) => (
    <tr key={index}>
      <td>{v.name}</td>
      <td>{v.email}</td>
      <td>{v.type}</td>
      <td>{v.timestamp}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default Admin;
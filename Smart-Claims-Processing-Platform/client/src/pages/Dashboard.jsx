import React, { useEffect, useState } from 'react';
import { getAllClaims } from '../services/claimsService';
import './Dashboard.css'; // Optional: custom styles

function Dashboard() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllClaims()
      .then((res) => {
        setClaims(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching claims:', err);
        setLoading(false);
      });
  }, []);

  const statusCounts = claims.reduce((acc, claim) => {
    acc[claim.status] = (acc[claim.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="dashboard">
      <h1>Claims Dashboard</h1>

      {loading ? (
        <p>Loading claims...</p>
      ) : (
        <>
          <div className="metrics">
            <div className="metric-card">
              <h3>Total Claims</h3>
              <p>{claims.length}</p>
            </div>
            {Object.entries(statusCounts).map(([status, count]) => (
              <div className="metric-card" key={status}>
                <h3>{status}</h3>
                <p>{count}</p>
              </div>
            ))}
          </div>

          <div className="recent-claims">
            <h2>Recent Claims</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {claims.slice(0, 10).map((claim) => (
                  <tr key={claim.id}>
                    <td>{claim.id}</td>
                    <td>{claim.claimType}</td>
                    <td>{claim.status}</td>
                    <td>{claim.priority}</td>
                    <td>{new Date(claim.submittedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import { submitClaim } from '../services/claimsService';
import './ClaimForm.css'; // Optional styling

function ClaimForm() {
  const [formData, setFormData] = useState({
    claimantName: '',
    claimType: '',
    priority: 'Medium',
    description: '',
    document: null,
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      await submitClaim(payload);
      setStatus('Claim submitted successfully!');
      setFormData({
        claimantName: '',
        claimType: '',
        priority: 'Medium',
        description: '',
        document: null,
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('Failed to submit claim.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="claim-form">
      <h1>Submit a New Claim</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Claimant Name:
          <input
            type="text"
            name="claimantName"
            value={formData.claimantName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Claim Type:
          <select
            name="claimType"
            value={formData.claimType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Health">Health</option>
            <option value="Auto">Auto</option>
            <option value="Property">Property</option>
            <option value="Life">Life</option>
          </select>
        </label>

        <label>
          Priority:
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </label>

        <label>
          Upload Document:
          <input
            type="file"
            name="document"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Claim'}
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default ClaimForm;

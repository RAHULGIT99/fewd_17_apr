import React, { useState } from 'react';

export default function Main() {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDetails = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage("No token found. Please login again.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/getdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (res.status === 200) {
        setUserData(data.user);
        setErrorMessage('');
      } else {
        setErrorMessage(data.error || 'Failed to fetch user details');
      }
    } catch (err) {
      setErrorMessage('Error fetching details');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Main Page</h1>
      <button onClick={fetchDetails} style={styles.button}>Get My Details</button>

      {errorMessage && <p style={styles.error}>{errorMessage}</p>}

      {userData && (
        <div style={styles.details}>
          <h3>User Info:</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>userID:</strong> {userData.userId}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px'
  },
  details: {
    marginTop: '30px',
    fontSize: '18px'
  },
  error: {
    color: 'red',
    marginTop: '20px'
  }
};

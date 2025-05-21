import React from 'react';
export default function Cover() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Application</h1>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '40px'
  }
};

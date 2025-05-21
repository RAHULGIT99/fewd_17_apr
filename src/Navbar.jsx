import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      {/* Left side */}
      <div style={styles.leftLinks}>
        <Link style={styles.button} to="/">Home</Link>
        {token && <Link style={styles.button} to="/main">Main</Link>}
      </div>

      {/* Right side */}
      <div style={styles.rightLinks}>
        {!token ? (
          <>
            <Link style={styles.button} to="/login">Login</Link>
            <Link style={styles.button} to="/signup">Sign Up</Link>
          </>
        ) : (
          <button style={styles.logout} onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
  },
  leftLinks: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  rightLinks: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    textDecoration: "none",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
  },
  logout: {
    padding: "8px 16px",
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default Navbar;

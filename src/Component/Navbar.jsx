import React from 'react';
import { Container, Navbar, Nav, Button, Dropdown, Row, Col } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// ✅ NAVBAR COMPONENT
export const CustomNavbar = ({ user, setUser }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm sticky-top py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
          🛍️ ShopCart
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            {!user ? (
              <>
                <Button as={Link} to="/login" variant="outline-primary" size="sm">Login</Button>
                <Button as={Link} to="/register" variant="primary" size="sm">Register</Button>
              </>
            ) : (
              <Dropdown align="end" show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
                <Dropdown.Toggle variant="light" className="border-0">
                  <FaUserCircle size={24} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow">
                  <Dropdown.Header>
                    <div className="fw-bold">👋 {user.firstName} {user.lastName}</div>
                    <div className="text-muted small">{user.username}</div>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} className="text-danger">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
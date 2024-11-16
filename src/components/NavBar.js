


import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import noteContext from '../context/Notes/Notecontext';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import Form from 'react-bootstrap/Form'; 
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./file.css"

const NavBar = (props) => {
  let navigate = useNavigate();

  let location = useLocation();
  const { se, setse,find,pp,setpp} = useContext(noteContext);

  const search = (e) => {
    e.preventDefault();
    setse(e.target.value);
   
  
  };

 


  const click = async(e) => {
    e.preventDefault();
    props.set(60)
  await find(se);
  navigate("./Search")
  props.set(100)
 
   
  };




  return (
    <div>
      <div style={{ width: "100%" }}>
        <Navbar expand="lg" fixed="top"  className="navbar-dark bg-dark  nav-dropdown-round-border custom-dropdown">
          <Container>
            <Navbar.Brand as={Link} to="/">MovieSphere</Navbar.Brand>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} className={`${location.pathname === "/" ? "active" : ""}`} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} className={`${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Nav.Link>
           
              </Nav>              
          <Form  className="d-flex mx-1 my-1">
                <Form.Control
                  type="search"
                  placeholder="Search movies"
                  className="me-2"
                  aria-label="Search or series"
                  
                  onChange={search}


        

                  
                /> 
                
                <Button type="submit"   onClick={click} variant="outline-light" > 
                  <FaSearch />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;

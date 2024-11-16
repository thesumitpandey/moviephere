import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import  "./file.css";
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const about=()=> {


  return (    <div className="container my-5"> 
      <NavBar></NavBar>
    <Accordion defaultActiveKey="0" className='contain ' style={{minWidth:"60px", color:"white"}}>
    <Card className='' >
      <Card.Header>
      
      </Card.Header>
      <Accordion.Collapse eventKey="0" >
        <Card.Body className='head'>      
        Welcome to MovieSphere — your ultimate destination for everything movies! Whether you're a casual viewer or a passionate cinephile, MovieSphere offers a comprehensive space to explore, discover, and enjoy all things cinema.

Our goal is simple: to bring movie lovers together and make it easier to find your next favorite film. From detailed information, cast listings, and ratings to engaging reviews and recommendations, we provide a platform that caters to your cinematic curiosity. Explore thousands of movies and TV shows, stay updated with the latest releases, and indulge in a world of entertainment like never before.
<h5>

Thank you for being part of our community
</h5>
</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  <div 
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh", 
  }}
>
  <Button 
   as={Link} to="/Home"
    variant="outline-light" 
    className="btn-dark" 
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      outline: "none",
      boxShadow: "none"
    }}
  >
   Back
  </Button>
</div>
  </div>
  )
}
export default about;

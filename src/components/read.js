
import './file.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import abcd from "./abcd.png"
import React, { useEffect, useContext } from 'react'
import noteContext from '../context/Notes/Notecontext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Read(props) {





    const navigate = useNavigate()
const{fe,re,tp,all}=useContext(noteContext);
useEffect(() => {
  
    if (!fe || !fe.Title) {

      navigate("/Home");
    }
  }, [fe, navigate]);





  return (
<div className="container d-flex justify-content-center my-5">
  <Card style={{ width: "60rem" }}>
    <Card.Img 
      className="container d-flex justify-content-center my-5"
      variant="top" 
      src={fe.Poster} 
      style={{ width: "50%", height: "50%", objectFit: "cover" }} 
    />
    <Card.Body className="text-center">
    <Card.Title className="fs-3 fw-bold">
  <h3 style={{ fontWeight: "bolder" }}>Title-</h3>
  <span style={{ textDecoration: "underline" }}>{fe.Title}</span>
</Card.Title>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Actors-</h3>{fe.Actors}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Director-</h3>{fe.Director}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Writer-</h3>{fe.Writer}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Country-</h3>{fe.Country}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Language-</h3>{fe.Language}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Genre-</h3>{fe.Genre}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>
BoxOffice
-</h3>{fe.
BoxOffice
}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Awards-</h3>{fe.
Awards}
      </Card.Text>
      <Card.Text className="fs-5">
        <h3 style={{ fontWeight: "bolder" }}>Genre-</h3>{fe.Genre}
      </Card.Text>
    <Card.Text className="fs-5 plot-text">
  <h3 style={{ fontWeight: "bolder" }}>Plot-</h3>{fe.Plot}
</Card.Text>

    </Card.Body>
    <div 
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh", 
  }}
>
  <Button 
   as={Link} to="/Home"
    variant="outline-light" 
    className="btn btn-dark" 
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
  </Card>
  
 
</div>


  )
}

export default Read
import React from 'react'
import './file.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import abcd from "./abcd.png"


function movieitems(props) {

  







  return (
    <Card className="card-container" style={{ width: "25rem" }}>
      <div className="card-overlay"></div>
      <Card.Img
        variant="top"
        src={props.i}
        className="card-image"
      />
      <Card.Body>
        <Card.Title>{props.t}</Card.Title>
        <Card.Text>Year-{props.y}</Card.Text>
        <Card.Text>Type-{props.tp}</Card.Text>
        
        <Button variant="primary" className="card-btn-left" onClick={() => props.r(props.t)}>
        More
        </Button>
      </Card.Body>
    </Card>
  )
}

export default movieitems

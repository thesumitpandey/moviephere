import React from 'react'
import { useEffect,useContext } from 'react';
import noteContext from '../context/Notes/Notecontext';
import Movieitems from './movieitems';
import abcd from "./abcd.png"
import './file.css'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Search(props) {
    const {se, k,find,all,re} = useContext(noteContext);
    let navigate = useNavigate();

   

       const r=async(ti)=>{
        props.set(60)
       await re(ti);
      navigate("/Read")
      props.set(100)
      
            }

  return (
    <div className="row">


{(!Array.isArray(k) || k.length === 0) && (
  <h1
    style={{
      color: "red",
      backgroundColor: "black", 
      padding: "10px 20px", 
      border: "1px solid red", 
      borderRadius: "10px",
      textAlign: "center", 
      fontWeight: "bold",
      width: "fit-content", 
      margin: "20px auto", 
    }}
  >
    Search with valid name!
  </h1>
)}








       {
       Array.isArray(k) && k.length > 0 &&
    k.map((s, index) => (
      <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
     <Movieitems t={s.Title} i={(s.Poster!="N/A")?s.Poster:abcd } y={s.Year} r={r}  tp={(s.Type)}/>
      </div>
    ))
  }
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




    </div>
  )
}

export default Search

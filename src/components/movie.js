import React, { useEffect, useContext } from 'react'
import noteContext from '../context/Notes/Notecontext';
import Movieitems from './movieitems';
import abcd from "./abcd.png"
import './file.css'
import { useNavigate } from 'react-router-dom';
import read from "./read"
import { Button } from 'react-bootstrap';

function Movie(props) {

    const {setb,b, s,find,all,re,settp,tp,l} = useContext(noteContext);
    let navigate = useNavigate();
    
    useEffect(() => {
props.set(60);
       all();
       props.set(100);
       
      }, []);
     


      const r=async(ti)=>{
        props.set(60); 
await  re(ti);
props.set(100);
navigate("/Read")

      }



      const p=()=>{
        props.set(60); 
        setb(b-1);
        all();
        props.set(100)
            }
            const n=()=>{
               
                props.set(60)
                setb(b+1);
                all();
                props.set(100)
              
                    }




  return (
<div className="row">
  {
    s.map((s, index) => (
      <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
        <Movieitems t={s.Title} i={(s.Poster!="N/A")?s.Poster:abcd } y={s.Year} r={r} tp={(s.Type)}/>
      </div>
    ))
  }

<div className="d-flex justify-content-between align-items-center">
  <Button variant="outline-light" className="me-3 btn-dark my-4"   disabled={b === 1} onClick={p}  style={{ outline: "none", boxShadow: "none" }}>
    Previous
  </Button>
  <Button variant="outline-light" className="me-3  btn-dark my-4" disabled={b === l-1} onClick={n}  style={{ outline: "none", boxShadow: "none" }} >
    Next
  </Button>
</div>

</div>

  )
}

export default Movie





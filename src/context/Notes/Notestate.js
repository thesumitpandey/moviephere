import { useContext, useState } from 'react';
import Notecontext from './Notecontext';



const NoteState = (props) => {
  
  const[s,sets]=useState([]);
  
  const[se,setse]=useState("all");
  const[k,setk]=useState([]);
  const[fe,setfe]=useState([]);
  const[tp,settp]=useState("");
  const[b,setb]=useState(1);
  const[l,setl]=useState(1);



  const find = async (se)=> {




   
    const k = `http://www.omdbapi.com/?s=${se}&plot=full&apikey=92cf25d3&page`; 
  
    let r = await fetch(k);
      let p = await r.json()

      setk(p.Search);
      console.log(p);
  
     
    }
    
    
    
    
    const re = async (e)=> {
      
      // console.log(e);
      
      const ur = `http://www.omdbapi.com/?t=${e}&plot=full&apikey=92cf25d3`; 
      
      let dat= await fetch(ur);
      let parsedDat = await dat.json()
      setfe(parsedDat)
      
  
  }















const all = async ()=> {




  const url = `http://www.omdbapi.com/?s=all&plot=full&apikey=92cf25d3&page=${b}`; 

  let data = await fetch(url);
    let parsedData = await data.json()
setl(parsedData.totalResults/10)

   sets(parsedData.Search);



}







  return (
    <Notecontext.Provider value={{s,se,setse,all,find,k,re,fe,settp,tp,setb,b,l}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;

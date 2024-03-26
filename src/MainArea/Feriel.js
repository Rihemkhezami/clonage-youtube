import React from 'react'
import './MainArea.css'


import fer from "./Mdm/fer.jpg"

import {Link} from 'react-router-dom'
import projC from './Mdm/ProjetC.png'
function Feriel(){
  
  return(
    
    <div className="Video">
        <Link to="/Vidfer">
          <img  src={projC} style={{height:"200px" , width:"250px" , margin: "5px",borderRadius:"5px"}}   alt="Pojet c" />
        </Link>
        <br></br>
        <div className="Logo">
          <Link to="/Feriel">
            <img src={fer} alt="logo de chaine" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
          </Link>
          <Link to="/Vidfer">
            <div>Projet Gestion d'avions d'un aéroport</div>
          </Link>
        </div>
        <br></br>
        <div className="view">
        2 720 vues 25 sept. 2020
        </div>
       
      </div>
   
)
}
export default Feriel
import React from 'react'
import './MainArea.css'
import ri from "./Mdm/ri.jpg"
import Java from "./Mdm/Java.png"
import { Link } from 'react-router-dom'
function Rihem(){

return(
    
  <div className="Video">
        <Link to="/Vidri">
          <img  src={Java} style={{height:"200px" , width:"250px" , margin: "5px",borderRadius:"5px"}}   alt="Java" />
        </Link>
        <br></br>
        <div className="Logo">
          <Link to="/Rihem">
            <img src={ri} alt="logo de chaine" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
          </Link>
          <Link to="/Vidri">
          <div>Apprendre JAVA pour debutant</div>
          </Link>
        </div>
        <br></br>
        <div className="view">
        2 720 vues 25 sept. 2020
        </div>
        
    </div>  
)
}
export default Rihem
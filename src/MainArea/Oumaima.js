import React from 'react'
import './MainArea.css'
import Calcul from "./Mdm/Calcul.png"
import oum from './Mdm/oum.jpg'
import {Link} from 'react-router-dom'
function Oumaima(){
 
return(
    
  <div className="Video">
       
        <Link to="/Vidoum">
        <img  src={Calcul} style={{height:"200px" , width:"250px" , margin: "5px",borderRadius:"5px"}}   alt="calculatrice" />
        </Link>
        <br></br>
        
        <div className="Logo">
          <Link to="/Oumaima">
          <img src={oum} alt=" logo de chaine" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
          </Link>
          <Link to="/Vidoum">
          <div>Creation d'une calculatrice Android</div>
          </Link>
        </div>
        <br></br>
        <div className="view">
        2 720 vues 25 sept. 2020
        </div>
 </div>
)

}
export default Oumaima
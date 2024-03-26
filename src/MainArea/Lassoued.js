import React from 'react'
import './MainArea.css'
import med from "./Mdm/med.png"
import FamilyClub from './Mdm/Familyclub.png'
import {Link} from 'react-router-dom'
function Lassoued(){

return(
    
  <div className="Video">
        <Link to="/Vidlassoued">
        <img  src={FamilyClub} style={{height:"200px" , width:"250px" , margin: "5px",borderRadius:"5px"}}   alt="FAmily Club" />
        </Link>
        <br></br>
        <div className="Logo">
          <Link to="/Lassoued">
            <img src={med} alt=" logo de chaine" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
          </Link>
          <Link to="/Vidlassoued">
          <div>Site rebotique</div>
          </Link>
        </div>
        <br></br>
        <div className="view">
        2 720 vues 25 sept. 2020
        </div>
 </div>
)
}
export default Lassoued;
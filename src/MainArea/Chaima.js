import React from 'react'

import './MainArea.css'
import idoudi from "./Mdm/idoudi.gif"
import intro from'./Mdm/introdEncryp.png'
import { Link } from 'react-router-dom'

function Chaima(){

return(
    
  <div className="Video">
        <Link to="/Vididoudi">
        <img  src={intro} style={{height:"200px" , width:"250px" , margin: "5px",borderRadius:"5px"}}   alt="Introduction encrypt" />
        </Link>
        <br></br>
        <div className="Logo">
          <Link to="/Chaima">
          <img src={idoudi} alt="logo de chaine" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
          </Link>
          <Link to="/Vididoudi">
            <div>introduction to Data encryption</div>
          </Link>
        </div>
        <br></br>
        <div className="view">
        2 720 vues 25 sept. 2020
        </div>
    </div>
   
)
}
export default Chaima
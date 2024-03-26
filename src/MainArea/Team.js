import React from 'react'
import Cardmembre from './Cardmembre';
import fer from "./Mdm/fer.jpg"
import ri from "./Mdm/ri.jpg"
import med from "./Mdm/med.png"
import oum from './Mdm/oum.jpg'
import chai from "./Mdm/idoudi.gif"

function Team(){
return(
  <div className="Main">
    <div className="row ml-3 row-cols-1 row-cols-md-3 g-4">
      <Cardmembre name={"Lassoued Mohamed"} src={med}  description={"Chef d'equipe"} lien={"Lassoued"}/>
      <Cardmembre name={"Khzami Rihem"} src={ri}  description={"Membre"} lien={"Rihem"}/>
      <Cardmembre name={"Louzir Oumaima"} src={oum}  description={"Membre"} lien={"Oumaima"}/>
      <Cardmembre name={"Ben Chaaben Feriel"} src={fer}  description={"Membre"} lien={"Feriel"}/>
      <Cardmembre name={"Idoudi Chaima"} src={chai}  description={"Membre"} lien={"Chaima"}/>
    </div> 
  </div>
    
)
}
export default Team; 
import React from 'react'
import ReactPlayer from 'react-player'
import './MainArea.css'
import ProjetCASD from"../Video/ProjetCASD.mp4"
import useState from 'react-hook-use-state';
import fer from "./Mdm/fer.jpg"
import dislikegris from './Mdm/DisLikeGris.png'
import dislikeblue from './Mdm/DisLikeBlue.jpg'
import likeblue from './Mdm/LikeBlue.png'
import likeGris from './Mdm/LikeGris.png'
import {Link} from 'react-router-dom'
import Lassoued from './Lassoued';
import Rihem from './Rihem';
import Oumaima from './Oumaima';
import Chaima from './Chaima';
function Vidfer(){
  const [disLike , setdisLike] = useState(false)
  const [Like , setLike] = useState(false)
  const [comm , setcomm] = useState("")
  const [parag , setparag] = useState([])
  const [countlike , setcountlike]= useState(450)
  const [countdislike , setdiscountlike]= useState(1)
  const changeDislike=()=>{
    setdisLike(disLike=>!disLike)
    if(disLike){
      setdiscountlike(countdislike-1)
    }else{
      setdiscountlike(countdislike+1)
    }
    if(Like){
      setLike(Like=>!Like)
      setcountlike(countlike-1)
    }
  }
  const changeLike=()=>{
    setLike(Like=>!Like)
    if(Like){
      setcountlike(countlike-1)
    }else{
      setcountlike(countlike+1)
    }
    if(disLike){
      setdisLike(disLike=>!disLike)
      setdiscountlike(countdislike-1)
    }
  }
  const changeComm=(e)=>{
    setcomm(comm => e.target.value)
    }
    const add = ()=>{
      if (comm !==""){
      setparag(prevArray => [...prevArray, comm])
        setcomm("")}
        }
        const supp=(i)=>{
          const array = [...parag]
          array.splice(i,1)
          setparag(array)
        }
    const ajoutParag = parag.map(
      (item , index)=><div key={index} className='d-flex justify-content-between badge bg-light text-dark mt-3'> 
      <p  style={{fontSize:"2em" }}> {item} </p> 
      <button className='text-danger' style={{fontSize:"2.5em"}} 
      onClick={()=>supp(index)}>x</button> 
      </div>)
  const dislike =(disLike)?<img className='unlike' src={dislikeblue} alt="unlike" style={{height:"46px",width:"46px"}} onClick={changeDislike}/>:<img className='unlike' src={dislikegris} alt="unlike"  style={{height:"35px",width:"35px"}} onClick={changeDislike}/>
  const like =(Like)?<img className='like' src={likeblue} alt="like" style={{height:"56px",width:"56px"}} onClick={changeLike}/>:<img className='like' src={likeGris} alt="like"  style={{height:"56px",width:"56px"}} onClick={changeLike}/>

  return(
    
    <div className="row" style={{width:"100%"}}>
        <div className='col-sm-10'>
        <ReactPlayer 
        url={ProjetCASD}
        poster="/images/ReactJS.png"
        height="500px"
        width="100%"
        controls
        />
        <br></br>
        <div className="Logo">
          <Link to="/Feriel">
            <img src={fer} alt="logo de chaine" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
          </Link>
          <div>Projet Gestion d'avions d'un aéroport</div>
        </div>
        <br></br>
        <div className="view">
        2 720 vues 25 sept. 2020
        </div>
        <div>
          {like}
          {countlike}
          {dislike}
          {countdislike}
        </div>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Commentaire ....</label>
        <div className="mb-3 d-flex bd-highlight">
            <textarea className="form-control p-2 flex-grow-1 bd-highlight" id="exampleFormControlTextarea1" onChange={changeComm} value={comm} rows="1"></textarea>
            <button className='btn btn-secondary p-2 bd-highlight' onClick={add}>Ajouter un commentaire</button>
            </div>
        <div>
           {parag.length>0?(<h3>Votre commentaire</h3>):""}
           {ajoutParag}
        </div>
        
        </div>
        <div className='col-sm-2'>
          <Lassoued/>
          <Rihem/>
          <Oumaima/>
          <Chaima/>


          </div>
      </div>
   
)
}
export default Vidfer
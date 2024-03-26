import React from 'react'
import './MainArea.css'
import Feriel from './Feriel';
import Main from './Main';
import Lassoued from './Lassoued';
import Rihem from './Rihem';
import Team from './Team';
import Oumaima from './Oumaima';
import Chaima from './Chaima';
import Vididoudi from './Vididoudi'
import Vidri from './Vidri'
import Vidfer from './Vidfer'
import Vidlassoued from './Vidlassoued'
import Vidoum from './Vidoum'
import {Route,Routes ,Link} from 'react-router-dom'
function MainArea(){
    return(
        
            <div className="MainArea">
                <div className="Sidebar">
                    <div className="Home">
                        <div className="Quick_Icon">
                        <Link to="/" style={{display:"contents"}}>
                        <img src={require("./Mdm/MdHome.png").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Home</div>
                        </Link>
                        </div>
                        <div className="Quick_Icon">
                        <img src={require("./Mdm/MdGripFire.png").default} width="45px" height="45px" alt="..."/>
                        <div>Trending</div>
                        </div>
                        <div className="Quick_Icon">
                        <img src={require("./Mdm/FillCollectionPlayFill.png").default} width="45px" height="45px" alt="..."/>
                        <div>Subscriptions</div>
                        </div>
                    </div>
                    <div className="Library">
                    <div className="Quick_Icon">
                        <Link  to="/Team" style={{display:"contents" }}>
                        <img  src={require("./Mdm/team.png").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Team</div>  
                        </Link> 
                    </div>
                    <div className="Quick_Icon">
                        <Link  to="/Feriel" style={{display:"contents"}}>
                        <img  src={require("./Mdm/fer.jpg").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Feriel</div>
                        </Link>
                    </div>
                    <div className="Quick_Icon">
                        <Link  to="/Rihem" style={{display:"contents"}}>
                        <img  src={require("./Mdm/ri.jpg").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Rihem</div>
                        </Link>
                    </div>
                    <div className="Quick_Icon">
                        <Link  to="/Lassoued" style={{display:"contents"}}>
                        <img  src={require("./Mdm/med.png").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Lassoued</div>
                        </Link>
                    </div>
                    <div className="Quick_Icon">
                        <Link to="/Oumaima" style={{display:"contents"}}>
                        <img  src={require("./Mdm/oum.jpg").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Oumaima</div>
                        </Link>
                    </div>
                    <div className="Quick_Icon">
                        <Link to="/Chaima" style={{display:"contents"}}>
                        <img src={require("./Mdm/idoudi.gif").default} width="45px" height="45px" alt="..."/>
                        <div style={{ padding: "12px"}}>Chaima</div>
                        </Link>
                    </div>
                    </div>
                    <div className="More_From_Youtube">
                    
                    <div className="Quick_Icon">
                        <img src={require("./Mdm/RssFeed.png").default} width="45px" height="45px" alt="..."/>
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <img src={require("./Mdm/Futbol.png").default} width="45px" height="45px" alt="..."/>
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <img src={require("./Mdm/Music.png").default} width="45px" height="45px" alt="..."/>
                        <div>Musics</div>
                    </div>
                    <div className="Quick_Icon">
                        <img src={require("./Mdm/Newspaper.png").default} width="45px" height="45px" alt="..."/>
                        <div>News</div>
                    </div>
                    </div>
                </div>
                <div className="Main">
                    <div className="Videos">
                        
                            <Routes>
                                <Route exact path="/" element={<Main/>}/>
                                <Route exact path="/Team" element={<Team/>}/>
                                <Route exact path="/Feriel" element={<Feriel/>}/>
                                <Route exact path="/Rihem" element={<Rihem/>}/>
                                <Route exact path="/Lassoued" element={<Lassoued/>}/>
                                <Route exact path="/Oumaima" element={<Oumaima/>}/>
                                <Route exact path="/Chaima" element={<Chaima/>}/>
                                <Route exact path="/Vidoum" element={<Vidoum/>}/>
                                <Route exact path="/Vididoudi" element={<Vididoudi/>}/>
                                <Route exact path="/Vidri" element={<Vidri/>}/>
                                <Route exact path="/Vidfer" element={<Vidfer/>}/>
                                <Route exact path="/Vidlassoued" element={<Vidlassoued/>}/>
                            </Routes>
                    </div>         
                </div>
            </div>
        
    )
}
 export default MainArea 
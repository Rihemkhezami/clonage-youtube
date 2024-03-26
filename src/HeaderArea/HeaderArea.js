import React from 'react'
import './HeaderArea.css'
import { Link } from 'react-router-dom'
function HeaderArea() {
    return (
        
            <div className="HeaderArea">
                <div className="Header">
                    <header className="header">
                        <button className="button">
                            &#9776;
                        </button>
                        <Link to="/" style={{display:"contents"}}>
                            <img src={require("./react-icons/fa/FaYoutube.png").default} height="48px" width="48px" alt='...' />
                            <div id="youtube">YouTube</div>
                        </Link>
                    </header>
                    <div className="Search">
                        <input type="search" placeholder="search" />
                        <div className="search">
                            <img src={require("./react-icons/md/MdSearch.png").default} height="35px" width="35px"  alt='...'/>
                        </div>
                    </div>
                    <div className="Icon">
                        <div className="icon"><img src={require("./react-icons/md/MdVideoCall.jpg").default} width="45px" height="45px"  alt='...'/></div>
                        <div className="icon"><img src={require("./react-icons/md/MdViewComfy.png").default} width="45px" height="45px"  alt='...'/></div>
                        <div className="icon"> <img src={require("./react-icons/ai/AiTwotoneBell.png").default} width="45px" height="45px"  alt='...'/></div>
                        <div className="icon">
                            <img id="img" src="/images/img.jpg"  alt='...' />
                        </div>
                    </div>
                </div>
            </div>


           
        
    )
}
export default HeaderArea
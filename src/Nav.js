import React, { useEffect, useState } from "react";
import "./Nav.css";
import Search from './search'
function Nav() {
const[Show,handleShow]=useState(false);
useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if (window.scrollY>100) {
            handleShow(true);    
        }
        else handleShow(false);
    });
    return()=>{
        window.removeEventListener("scroll");
    }
},[])

  return (
    <div className={`nav ${Show && "nav_black"}`}>
      
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix logo"
      ></img>
      <div className="nav_avatar">
      <Search/>
      </div>
      {/* <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix logo"
      ></img> */}
      
    </div>
  );
}

export default Nav;

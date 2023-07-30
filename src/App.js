import React,{useState,useEffect} from "react";
// only write rfce
import './App.css';
import Row from './Row'
import requests from "./requests";
import Footer00 from './footer00';
import Banner from './Banner';
import Nav from './Nav';
import Search1 from "./search1";
const axios = require('axios');
function App() {
  const [Show, handleShow] = useState(false);
  const[name,setName]=useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      }
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  const Whole=()=>{
    if (name==null) {
      return(
        <>
        <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer00 />
      </>
      )
    } else {
      return(
        <div style={{paddingTop:'90px',minWidth:'cover',minHeight:'530px'}}>
        <Search1 title='matching results' fetchUrl={`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=44245e24ee5e87f443980c205662c7bc`}/>
        </div>
      )
    }
  }




  return (
    <div className="app">
      <div className={`nav ${Show && "nav_black"}`}>

        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        ></img>
        <div className="nav_avatar">
          <div class="search-container">
            <form action="/search" method="get">
              <input class="search" id="searchleft" type="search" name="q" placeholder="Search" onChange={(e) => setName(e.target.value)} />
              <label class="button searchbutton" for="searchleft"><span class="mglass">&#9906;</span></label>
            </form>
          </div>
        </div>
        

      </div>
      <Whole/>
    </div>

  );

}
export default App;

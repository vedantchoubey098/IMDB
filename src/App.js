import React, { useEffect, useState}  from 'react';
import Movie from './components/Movie';
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Watchlist from './components/Watchlist'
import Filter_serch from './components/Filter_serch';
import { ListGroup } from 'react-bootstrap';
import ImgSection from './components/ImgSection';
import { Dropdown, InputGroup, DropdownButton, FormControl } from 'react-bootstrap';
import Filter from './components/Filter'
import Filter_pop from './components/Filter_pop';





const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const FEATURE_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ filter, setFilter ] = useState([]);
  const [ filter_pop, setfilter_pop ] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  
 


  useEffect(() => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    }, {});
    
  }, []);

  useEffect(() => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setfilter_pop(data.results);
    }, {});
    
  }, []);

  useEffect(() => {
    fetch(FEATURE_API)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setFilter(data.results);
    }, {});
    
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchTerm)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    }, {});
    
  }
  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  }

  return(
  <>
    <form onSubmit={handleOnSubmit}>
    <header>
             <a href="#"><img src="imdb1.JPG" alt="logo" style={{position:'absolute', left:'10px', width:'85px'}}></img></a>
             
             <input className="search" style={{width:'50%'}} type="search" placeholder="Search..." value={searchTerm}
              onChange={handleOnChange}/>
      </header> 
    </form> 
    <Banner />
    <Header />
    <ImgSection />
    <Header2 />
    <Watchlist />
    <Header1 />

    <div className="movie-container">
      {movies.length > 0 &&
           movies.map((movie) => <Movie key={movie.id} {...movie} />)}    
    </div>
    <Header3 />    
    {/* <Filter_serch /> */}
   
              
    <div className="movie-container">
    <div className="movie-container">
               <>
                <InputGroup className="md-3" style={{background:"#000", display:'flex'}}>
                <DropdownButton 
                as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Popular"
                id="input-group-dropdown-1"
                    >
                <Dropdown.Item className="movie-container" style={{display:'flex', background:'#000',color:'#fff'}} >
                  {movies.length > 0 &&
           movies.map((movie) => <Filter_pop key={movie.id} {...movie} />)}
            </Dropdown.Item>
            <Dropdown.Divider />
                </DropdownButton>
                  </InputGroup>
                </>
                </div>


                <div className="movie-container">
               <>
                <InputGroup className="md-3" style={{background:"#000", display:'flex', }}>
                <DropdownButton 
                as={InputGroup.Prepend}
                  variant="outline-secondary"
                  title="Average"
                id="input-group-dropdown-1"
                    >
                <Dropdown.Item className="movie-container" style={{display:'flex',background:'#000',color:'#fff'}} >
                  {movies.length > 0 &&
           filter.map((movie) => <Filter key={movie.id} {...movie} />)}
           </Dropdown.Item>


                <Dropdown.Divider />
                </DropdownButton>
                  </InputGroup>
                   
                </>
                </div>
                      
    </div>
    <div className="movie-container" style={{display:'flex'}}>
    {movies.length > 0 &&
           filter.map((movie) => <Filter key={movie.id} {...movie} />)} 
    </div> 
    <Footer />   
    
  </>
  );
}

export default App;

import React from 'react';
import { Col } from 'react-bootstrap';


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote_average) => {
  if(vote_average >=8) {
      return 'green'
  }
  else if (vote_average>=6)
  {
      return 'orange'
  }
  else {
      return 'red';
  }
}

const Movie = ({title, poster_path, overview, vote_average}) => {
     return (
        <div className="movie">
          <img src={poster_path ?(IMG_API + poster_path) : 'comingsoon.jpg'} alt={title} />
          <div className="movie-info">
              <h5>{title}</h5>
              <span className={`tag${setVoteClass(vote_average)}`}>{vote_average}</span>
              
          </div>
          {/* <input className='btn_play' type="button"  value="Watchlist" style={{border:'1px solid #000'}}/> */}
          
          
          <div className="movie-over">
              <h2>Overview: </h2>
              <p>{overview}</p>
               <button style={{width:"80%", background:'#F5C518' ,color:'#000',}}><i style={{padding:'5px'}} class="fas fa-plus"></i>Wishlist</button>   
              
          </div>
          <div className="">
         
          </div>

        </div>
        
    )
}

export default Movie;

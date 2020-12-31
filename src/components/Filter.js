import React from 'react';
import { Col } from 'react-bootstrap';



const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.asc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280/";

const setVoteClass = (vote_average) => {
    if(vote_average >=8) {
        return 'Popular'
    }
    else if (vote_average>=6)
    {
        return 'average'
    }
    else {
        return 'low';
    }
  }


const Filter = ({title, poster_path, overview, vote_average}) => {
     return (
         
        <div className="filter_movie"  style={{display:'flex'}}>
          <img src={poster_path ?(IMG_API + poster_path) : 'comingsoon.jpg'} alt={title} style={{width:'100px', width:'100px'}}/>
          <h5 style={{paddingRight:'10px'}}>{title}</h5>
          <span style={ {color:'#F5C518'}} className={`tag${setVoteClass(vote_average)}`}>{vote_average}</span>
          
         
          {/* <input className='btn_play' type="button"  value="Watchlist" style={{border:'1px solid #000'}}/> */}
          <div className="filter_movie-info" >
              
              
              
              
         </div>
        </div>
        
        
        
    )
}

export default Filter;

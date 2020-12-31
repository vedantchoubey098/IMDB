import React from 'react'

function Watchlist() {
    return (
        <div>
             <div className="watchlist" style={{display:'block', textAlign:'center', margin:'25px'}}>
            <img src='wishlist.JPG' alt='wishlist'></img>
            <h6>Sign in to access your Watchlist</h6>
            <h6 style={{color:'#B3B3AD'}}>Save shows and movies to keep track of what you want to watch</h6>
            <a href="https://www.imdb.com/registration/signin?ref_=hm_wls_signin"><button style={{background:"#F5C518", border:'2px solid #F5C518'}}>Sign-in to IMDB<i style={{padding:'5px'}} class="fa fa-angle-right" aria-hidden="true"></i></button></a>
            </div>
        </div>
    )
}

export default Watchlist

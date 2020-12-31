import React from 'react'

export const Footer = () => {
    return (
        <div>

            <footer style={{ background: '#000000', display:'block'}}>
                <div className="nav_footer" style={{alignContent:'center'}}>
                <p style={{textAlign:'center'}}>
                <a href="https://www.facebook.com/imdb"><i style={{color:"white",paddingLeft:'25px'}}class="fab fa-facebook-square fa-2x"></i></a>
                <a href="https://www.instagram.com/imdb/"><i style={{color:"white",paddingLeft:'25px'}}class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.twitch.tv/IMDb"><i style={{color:"white",paddingLeft:'25px'}}class="fab fa-discord fa-2x" ></i></a>
                <a href="https://twitter.com/imdb"><i style={{color:"white",paddingLeft:'25px'}}class="fab fa-twitter fa-2x" ></i></a>
                <a href="https://www.youtube.com/imdb"><i style={{color:"white",paddingLeft:'25px'}}class="fab fa-youtube fa-2x" ></i></a>
                </p>
                </div>

              
                
                <div className="para_one" style={{textAlign:'center'}}>
                <p>
                <a href="https://apps.apple.com/us/app/id342792525?_branch_match_id=872032404650448616&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot" style={{paddingLeft:'10px', color:'white'}}>Get the IMDb</a> 
                <a href="https://help.imdb.com/imdb?ref_=ft_hlp" style={{paddingLeft:'10px', color:'white'}}>Help</a>  
                <a href="https://pro.imdb.com/in?redirectUrl=https%3A%2F%2Fpro.imdb.com%2F%3Fref_%3Dft_pro%26rf%3Dcons_tf_pro" style={{paddingLeft:'10px', color:'white'}}>IMDbPro</a>
                </p>
                
                </div>
                <div className="foot_img">
                    <p style={{textAlign:'center'}}><img src='footer.JPG'></img></p>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
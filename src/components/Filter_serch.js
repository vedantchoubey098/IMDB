import React from 'react'
import Filter from '../components/Filter';
import Movie from '../components/Movie'
import { Dropdown, InputGroup, DropdownButton, FormControl } from 'react-bootstrap';


export const Filter_serch = () => {
 function popular(){
  
 }   
 function average(){
   
} 
  

    return (

      // viewMovie() {
      //   // console.log(this.props.movie.title)
      //   const url="https://www.themoviedb.org/movie/" + this.props.movie.id
      //   window.location.href = url
      // }
        
        <div className="header2">

           
           
            
            {/* <a href="https://www.imdb.com/what-to-watch/?ref_=hm_watch_btn"><button style={{background:"#F5C518", border:'2px solid #F5C518', display:'flex'}}>Browse our what to watch page<i style={{padding:'5px'}} class="fa fa-angle-right" aria-hidden="true"></i></button></a> */}
            <>
  <InputGroup className="mb-3" style={{background:"#000", display:'flex'}}>
    <DropdownButton style={{marginRight:'70px'}}
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="All Filter"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item >POPULAR</Dropdown.Item>
      <Dropdown.Item >AVERAGE</Dropdown.Item>
      <Dropdown.Item href="#">LOW</Dropdown.Item>
      <Dropdown.Divider />

    </DropdownButton>
    
  </InputGroup>

  
</>
           
            

        </div>
    )
}

export default Filter_serch;
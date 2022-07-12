import { Component } from "react";

class Header extends Component {

  constructor(){
    super();
  }

  render(){
    return(
      <nav>
        <h2>Horned Beast Application</h2>
        <img src = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt = "A unicorn and a narwhal nuzzling their horns"></img>
      </nav>
      ) 
  }
}

export default Header;
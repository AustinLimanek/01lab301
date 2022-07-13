import { Component } from "react";

class Header extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <img 
          src = {this.props.image_url} 
          alt = {this.props.description}
          >
        </img>
        <p>High One</p>
      </div>
      ) 
  }
}

export default Header;
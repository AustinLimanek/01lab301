import { Component } from "react";
import Button from "react-bootstrap/Button"

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      liked: 0
    }
  }

  handleClick = () => {
    this.setState({liked: this.state.liked + 1});
}

  render(){
    return(
      <div className = "beasts">
        <p>{this.props.title}</p>
        <img width = "300px"
          src = {this.props.image_url} 
          alt = {this.props.description}
          >
        </img>
        <div>
          <Button
            variant="primary"
            onClick={this.handleClick}
          >
            hello
          </Button>
          <p>{this.state.liked}</p>
        </div>
        <p>{this.props.description}</p>
      </div>
      ) 
  }
}

export default Header;
import { Component } from "react";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

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
      <Card style={{width: '18rem', height: '30rem'}}>
        <Card.Img variant="top" width='20px'
          src = {this.props.image_url} 
          alt = {this.props.description}
          />
        <Card.Title>{this.props.title}</Card.Title>
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
      </Card>
      ) 
  }
}

export default Header;
import { Component } from "react";
import HornedBeast from "./HornedBeast.js"

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      beastList: this.props.list
    }
  } 

  render(){
    return(
      <div>
        {this.state.beastList.map(photo => 
          <HornedBeast
            key={photo._id} 
            image_url={photo.image_url}
            title={photo.title}
            description={photo.description}
            handlePicClick={this.props.handlePicClick}
          >
          </HornedBeast>
        )}
      </div>
    )
  }
}

export default Main;
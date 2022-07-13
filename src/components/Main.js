import { Component } from "react";
import HornedBeast from "./HornedBeast.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import list from "../data.json"

class Main extends Component {

  constructor(){
    console.log(list);
    super();
    this.state = {
      gallery: list,
    }
  } 

  render(){
    return(
      <div>
        {this.state.gallery.map(photo => 
          <HornedBeast
            key={photo._id} 
            image_url={photo.image_url}
            title={photo.title}
            description={photo.description}
          >
          </HornedBeast>
        )}
      </div>
    )
  }
}

export default Main;
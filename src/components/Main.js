import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      beastList: this.props.list,
      searchBeastList: this.props.list
    }
  } 

  handleSearch = (e) => {
      //this.setState({beastList: this.props.list})
      let updateList = this.props.list.filter(b => b.keyword.includes(e.target.value))
      this.setState({beastList: this.state.beastList, searchBeastList: updateList})
  }

  handleForm = (e) => {
    if(e.target.value === "any"){
      console.log('hi')
      this.setState({beastList: this.state.beastList, searchBeastList: this.props.list})
    }
    else{
        let hornCount = parseInt(e.target.value);
        let updateList = this.props.list.filter(b => (b.horns === hornCount))
        this.setState({beastList: this.state.beastList, searchBeastList: updateList})
      }
  }


  render(){
    return(
      <div>
        <Form>
          <Form.Label>Search:</Form.Label>  
          <Form.Control 
            onChange={this.handleSearch}
            type="input"
          />
          <Form.Label>Select a Number of Horns:</Form.Label>
          <Form.Select onChange={this.handleForm} aria-label="2">
            <option value="any">Any number of horns</option>
            {Array.from(new Set(this.state.searchBeastList.map(b => b.horns))).map(h => {
                return <option key={h.toString()} value={h}>{h}</option>
              })
            }   

            
    </Form.Select>
        </Form>


        <Row>
        {this.state.searchBeastList.map(photo => 
          <Col key={photo._id}>
          <HornedBeast
            key={photo._id} 
            image_url={photo.image_url}
            title={photo.title}
            description={photo.description}
            handlePicClick={this.props.handlePicClick}
          >
          </HornedBeast>
          </Col>
        )}
        </Row> 
      </div>
    )
  }
}

export default Main;
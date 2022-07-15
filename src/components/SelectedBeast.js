import { Component } from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {

    render(){
        return(
            <Modal 
              show={this.props.showing} 
              onHide={this.props.exitModal} 
              size="md"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                      {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.url} 
                    alt={this.props.title} 
                    style={{width: "100%"}}></img>
                    <p>{this.props.description}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectedBeast
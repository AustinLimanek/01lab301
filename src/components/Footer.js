import { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';

class Footer extends Component {

  render(){
    return(
      <Accordion>
            <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Author: Austin Limanek
                    </Accordion.Header>
                    <Accordion.Body>
                        Special thanks to Josh Frazer for sharing his code!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    )
  }
}

export default Footer;
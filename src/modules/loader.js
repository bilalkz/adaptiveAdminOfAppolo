import React from 'react';
import Loader from 'react-loader-spinner';
import {Modal, ModalBody} from 'reactstrap';
 
class CommonLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
        <Modal className="custom-loader" isOpen={true}>
          <ModalBody>
          <Loader 
         type="Bars"
         color="#FFB140"
         height="50"	
         width="50"
      />   
          </ModalBody>
        </Modal>
    )
  }
}

export default CommonLoader;
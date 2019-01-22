import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
  
} from "reactstrap";
import ReactDatetime from "react-datetime";

import Select from 'react-select';
import CustomFormgroup from '../../components/CustomFormgroup/CustomFormgroup';


const initialState = {
  modalVisible:false,
  email:''
}

class Approvals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {modalVisible} = this.state;
    console.log(modalVisible)
    this.setState({
      modalVisible: !modalVisible
    });
  }

  sendInvite = () => {
    const {sendInvitation} = this.props;
    const {email} = this.state;
    let payload = {
      email:email
    }
    sendInvitation(payload);
    this.setState({
      modalVisible:false,
      email:''
    })
  }

  onTextChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }


  render() {
    console.log('Approvals', this.props)
    const {email} = this.state;
    return (
      <>
        <div className="content">
          <div className="contentHeader">
          <Modal isOpen={this.state.modalVisible} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Send invite</ModalHeader>
          <ModalBody>
          <CustomFormgroup withIcon type="text" placeholder="Email..." onChangeHandler={e => this.onTextChange(e)} value={email} name="email" iconClass="nc-icon nc-single-02" />            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{
              this.sendInvite()
            }}>Send</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            <Row>
              <Col md={6} sm={12}><h2 className="headerTop"> Timesheet approvals </h2></Col>
              <Col md={6} sm={12}><p className="span-screenshot-ml align-self-center pull-right manage-members"><i class="fa fa-credit-card-alt span-mr-5" aria-hidden="true"></i>Manage members</p></Col>
            </Row>
            <div className='project-data-table'>
              <Row>
                <Col>
                  <div>
                    <div className='text-center mt-10'>
                      <img width='300px' className='img-responsive' src={"https://d2elkgkdx2cp5d.cloudfront.net/assets/activities/no-activity-6b8573f0277d6a01388571384b9cfbdf.svg"} />
                    </div>
                    <h5 className='text-center mt-20 remove-default-uppercase font-bold'>
                      Timesheet approvals not enabled
                    </h5>
                    <h6 className='text-center remove-default-uppercase gray-color'>
                      Set up pay periods and enable timesheets to be able to approve timesheets
                    </h6>
                    <Row>
                    <Col className='text-center'>
                      <Button onClick={()=>{
                        this.setState({
                          modalVisible:true
                        })
                      }} color='primary' >
                        Manage members
                    </Button>
                    </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Approvals;

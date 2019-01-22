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
  ModalHeader,
  ModalFooter,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
} from "reactstrap";
import ReactDatetime from "react-datetime";
import CustomButton from '../components/CustomButton/CustomButton';
import Select from 'react-select';
import CustomFormgroup from "../components/CustomFormgroup/CustomFormgroup";

const options = [
  { label: "Select", value: "" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const initialState = {
  addTimeModalVisible: false,
  timesheetModal:false
}

class Daily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  toggleTimesheetModal = () =>{

    const { timesheetModal } = this.state;
    this.setState({
      timesheetModal: !timesheetModal
    })

  }

  toggleAddTimeModal = () => {
    const { addTimeModalVisible } = this.state;
    this.setState({
      addTimeModalVisible: !addTimeModalVisible
    })
  }




  render() {
    const customStyles = {
      control: (base, state) => ({
        ...base,
        border:'none',
        background: "#e9edf4",
        marginTop:"20px",
        height:"50px",
        fontSize: "19px",
        fontFamiliy:'Myriad Pro-Regular',
        // match with the menu
        
        // Overwrittes the different states of border
        // borderColor: state.isFocused ? "yellow" : "green",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        // "&:hover": {
        //   // Overwrittes the different states of border
        //   borderColor: state.isFocused ? "red" : "blue"
        // }
      }),
      menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // beautify the word cut by adding a dash 
        hyphens: "auto",
        // kill the gap
        marginTop: 0,
        textAlign: "left",
        // prevent menu to scroll y
        wordWrap: "break-word"
      }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
      })
    };

    console.log('Daily', this.props)
    const { selectedOption, addTimeModalVisible, timesheetModal } = this.state;
    return (
      <>
        <div className="content">
          {/* Modal for get started directions */}
          <Modal isOpen={addTimeModalVisible} toggle={this.toggleAddTimeModal} className={'add-time-modal'}>
            <ModalHeader toggle={this.toggleAddTimeModal} className='text-left font-bold'>Add time</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm={12} md={7}>
                  <Row>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>USER</Label>
                        <p>Apploye</p>
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>PROJECT*</Label>
                        <Select
                          isSearchable
                          value={selectedOption}
                          options={options}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>TASK*</Label>
                        <Select
                          isSearchable
                          value={selectedOption}
                          options={options} 
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>TIME SPAN ( ASIA - KOLKATA +05:30 )*</Label>
                        <Row>
                          <Col md={6} sm={6}>
                            <FormGroup>
                              <Label className='gray-color'>FROM</Label>
                              <ReactDatetime
                                inputProps={{
                                  className: "form-control",
                                  placeholder: "Date Picker Here"
                                }}
                                timeFormat={false}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={6}>
                            <FormGroup>
                              <Label className='gray-color'>TO</Label>
                              <ReactDatetime
                                inputProps={{
                                  className: "form-control",
                                  placeholder: "Date Picker Here"
                                }}
                                timeFormat={false}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>DURATION*</Label>
                        <CustomFormgroup type="number" placeholder="Duration" name="duration" />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>NOTE*</Label>
                        <Input type="textarea" placeholder="What were you working on? (ex: Responding to customers)" name="note" />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>REASON*</Label>
                        <Input type="textarea" placeholder="Why are you adding this time? (ex: Forgot to start timer)" name="reason" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} md={5}>
                  <Row>
                    <Col sm={12}>
                      <h5 className='remove-default-mt'>
                        FAQ
                  </h5>
                    </Col>
                    <Col sm={12}>
                      <p className='remove-default-mb font-bold'>
                        <span className='span-timesheet-daily'>Q: </span>
                        What happens if I enter time for a project that overlaps time worked on another project?
                  </p>
                      <p className=''>
                        <span className='span-timesheet-daily font-bold'>A: </span>
                        The new time will replace the time worked on the other project.
                  </p>
                    </Col>

                    <Col sm={12}>
                      <p className='remove-default-mb font-bold'>
                        <span className='span-timesheet-daily'>Q: </span>
                        How do I adjust which members of my team can modify their time?
                  </p>
                      <p className=''>
                        <span className='span-timesheet-daily font-bold'>A: </span>
                        There is a setting called "Modify Time Allowed" in the organization's settings.
                  </p>
                    </Col>

                    <Col sm={12}>
                      <p className='remove-default-mb font-bold'>
                        <span className='span-timesheet-daily'>Q: </span>
                        Why do I have to choose a task?
                    </p>
                      <p className=''>
                        <span className='span-timesheet-daily font-bold'>A: </span>
                        When a project's integration has the "Allow project tracking" setting disabled a task is required to add/edit manual time.
                  </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className='add-time-footer'>
            <Button color="secondary" onClick={this.toggleAddTimeModal}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.toggleAddTimeModal}>Save</Button>
          </ModalFooter>
          </Modal>

          <Modal isOpen={timesheetModal} toggle={this.toggleTimesheetModal} className={'add-time-modal'}>
            <ModalHeader toggle={this.toggleTimesheetModal} className='text-left font-bold'>Projects list by ERPNext</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm={12} md={12}>
                <Card className="dashboardTable tableBigHeight">
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Duration</th>                              
                              <th> Start Time</th> 
                              <th>End Time</th>                                                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                       
                            </tr>   
        
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>  
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>                                                     
                          </tbody>                          
                        </Table>
                      </CardBody>
                    </Card>
                </Col>
             
              </Row>
            </ModalBody>
            <ModalFooter className='add-time-footer'>
            <Button color="primary" onClick={this.toggleTimesheetModal}>Close</Button>
          </ModalFooter>
          </Modal>
          <Row>
            <h3 className='remove-default-mt'>Daily timesheet</h3>
          </Row>


          <Row>
          <Col md={4} sm={12} className=' col-md-offset-4'>
       
             <Row>
                  <Col md={6} sm={12}>
                  
                    <FormGroup>
                      <Label>Project</Label>
                      <Select
                        isSearchable
                        value={selectedOption}
                        options={options}
                        className="text-left"
                        styles={customStyles}
                      />
                      
                    </FormGroup>

                  </Col>
                  <Col md={6} sm={12} className='text-left'>
                  <FormGroup>
                      <Label>Team Member</Label>
                      <Select
                        isSearchable
                        value={selectedOption}
                        options={options}
                        styles={customStyles}
                      />
                    </FormGroup>
                  </Col>
                </Row> 
             </Col>   

                <Col md={8} sm={12}>
                <div>
                  <Row>
                  <div class="col-md-2-sm-2 offset-md-5">
                  
                    <Button  className="button-time text-center"  style={{background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)"}}>Today</Button>
            
                    </div>
                    <div class="col-md-5-sm-2">
                      
                      <FormGroup>
                      <Label className='hideText'>Text</Label>
                      <ReactDatetime
                        inputProps={{
                          className: "time_picker",
                          placeholder: "Date Picker Here"
                        }}
                        timeFormat={false}
                      />
                    </FormGroup>
                      </div>
                      <div class="col-md-2-sm-2">
                      <Button onClick={this.toggleAddTimeModal} 
                       style={{background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)"}}
                      className="button-add text-center">Add manual time</Button>
                      </div>
                  </Row>
               </div>
                </Col>
        </Row>
       


          {/* <Row>
            <Col sm={{ size: 6, offset: 6 }} md={{ size: 6, offset: 6 }}>
              <Row>
                <Col className='text-right'>
                  <Button onClick={this.toggleAddTimeModal} color="primary">Add time</Button>
                  <Button className='replace-border-primary' outline color="primary">Export</Button>
                </Col>
              </Row>

            </Col>
          </Row> */}
          <Row>
          <Col md="6">
                    <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                         <h2>ERPNext</h2>
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                           Lead genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Spacesoft
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Duration</th>                              
                              <th> Start Time</th> 
                              <th>End Time</th>                                                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                       
                            </tr>   
        
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>  
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>                                                     
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-right">
                        <CustomButton
                    classname="btn-round mb-3"
               
                    color="primary"
                    onClickHandler={() => {
                      // this.handleChangePassword();
                      this.toggleTimesheetModal()
                    }}
                    size="md"
                    text="See full timesheet"
                  />
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                         <h2>ERPNext</h2>
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                           Lead genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Spacesoft
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Duration</th>                              
                              <th> Start Time</th> 
                              <th>End Time</th>                                                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                       
                            </tr>   
        
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>  
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>                                                     
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-right">
                        <CustomButton
                    classname="btn-round mb-3"
               
                    color="primary"
                    onClickHandler={() => {
                      // this.handleChangePassword();
                      this.toggleTimesheetModal()
                    }}
                    size="md"
                    text="See full timesheet"
                  />
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                         <h2>ERPNext</h2>
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                           Lead genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Spacesoft
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Duration</th>                              
                              <th> Start Time</th> 
                              <th>End Time</th>                                                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                       
                            </tr>   
        
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>  
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>                                                     
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-right">
                        <CustomButton
                    classname="btn-round mb-3"
               
                    color="primary"
                    onClickHandler={() => {
                      // this.handleChangePassword();
                    }}
                    size="md"
                    text="See full timesheet"
                  />
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                         <h2>ERPNext</h2>
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                           Lead genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Spacesoft
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Duration</th>                              
                              <th> Start Time</th> 
                              <th>End Time</th>                                                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                       
                            </tr>   
        
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>  
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                        
                            </tr>                                                     
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-right">
                        <CustomButton
                    classname="btn-round mb-3"
               
                    color="primary"
                    onClickHandler={() => {
                      // this.handleChangePassword();
                    }}
                    size="md"
                    text="See full timesheet"
                  />
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Daily;

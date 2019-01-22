import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Progress
} from "reactstrap";
import img1 from 'assets/img/background.jpg'
import ReactDatetime from "react-datetime";
import Select from 'react-select';


const options = [
  { label: "Select", value: "" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const list = [
  { project: 'Apploye', name: 'Hubstaff', time: '6', sessions: '5' },
];

const initialState = {

}

const headerRenderer = ({ dataKey, label }) => {
  return (
    <>
      <span title={label}>{label}</span>
    </>
  );
};


class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('Activity Apps', this.props)
    const { selectedOption } = this.state;
    return (
      
        <div className="content">
          <Row>
            <h3 className='remove-default-mt'>URL'S activity</h3>
          </Row>
          <Row>
          <Col xs="6" sm="6" md="6">
              <Row>
                <Col md={4} sm={12}>
                  <FormGroup>
                    <Label>Project</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={12} className='text-left'>
                <FormGroup>
                    <Label>Team Member</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={12} className='text-left'>
                <Button outline  className="today-button-mt border-none" 
                style={{ 
                  alignSelf: 'flex-start',
                  background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)",
                  color:"white"
                  }}>
                    All notes
                  </Button>
                </Col>
              
              </Row>
            </Col>
            
            <Col sm={6}>
              <Row>
             
                <Col lg={6} md={6} sm={12}>
                  <FormGroup>
                    <Label className='hideText'>Text</Label>
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Date Picker Here"
                      }}
                      timeFormat={false}
                    />
                  </FormGroup>
                </Col>

                <Col sm={6}>
                  <Button  className="today-button-mt" 
                  style={{ 
                    alignSelf: 'flex-start',
                    background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)",
                    color:"white"
                    }}>
                    Today
                  </Button>
                  </Col>
              </Row>
            </Col>
            
          </Row>
              <Row>                
              <Col md="6">
                    <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            Apploye 
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Start Time:4:00pm
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            End time :3:00pm
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Visited Url's</th>                              
                              <th> Spend Time</th>                              
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
                              </td>                                                       
                            </tr>                                                      
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-center">
                          View report
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                
               
                  <Col md="6">
                   <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            Apploye 
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Start Time:4:00pm
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            End time :3:00pm
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Visited Url's</th>                              
                              <th> Spend Time</th>                              
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
                              </td>                                                       
                            </tr>                                                      
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-center">
                          View report
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                  <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            Apploye 
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Start Time:4:00pm
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            End time :3:00pm
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Visited Url's</th>                              
                              <th> Spend Time</th>                              
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
                              </td>                                                       
                            </tr>                                                      
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-center">
                          View report
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                  <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            Apploye 
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Start Time:4:00pm
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            End time :3:00pm
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Visited Url's</th>                              
                              <th> Spend Time</th>                              
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
                              </td>                                                       
                            </tr>                                                      
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-center">
                          View report
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col md="6">
                  <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            Apploye 
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            genarated
                          </Col>
                        </Row>
                        <Row style={{marginTop:'30px',marginBottom:'20px'}}>
                          <Col md="6" xs="6" >
                            Start Time:4:00pm
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                            End time :3:00pm
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Visited Url's</th>                              
                              <th> Spend Time</th>                              
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
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
                              {/* <Progress
                                max="100"
                                value="20"
                                barClassName="progress-bar-danger"
                              />                             */}
                              </td>                                                       
                            </tr>                                                      
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-center">
                          View report
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                  </Row>
               

                
          
        </div>
      
    );
  }
}

export default Apps;

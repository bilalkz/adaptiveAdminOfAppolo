import React from "react";


// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import CustomButton from '../../components/CustomButton/CustomButton';
import img1 from '../../assets/img/background.jpg'
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
import LeastHours from "../../assets/img/icons/least-hours.svg"
import TotalHours from "../../assets/img/icons/total-hours.svg"
import MostHours from "../../assets/img/icons/most-hours.svg"

// reactstrap components
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,  
  Progress,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample4,
  chartExample9,
  chartExample10,
  chartExample11,
  chartExample12
} from "variables/charts.jsx";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

const initialState = {
  addTimeModalVisible: false
}

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleAddTimeModal = () => {
    const { addTimeModalVisible } = this.state;
    this.setState({
      addTimeModalVisible: !addTimeModalVisible
    })
  }


  // componentDidMount = () => {

  // }
  render() {
    const {auth} =this.props;
    const { selectedOption, addTimeModalVisible } = this.state;
    console.log('user data show dashboard',auth)
    console.log('dashboard', this.props)
    return (
      <>
        <div className="content">

        <Modal isOpen={addTimeModalVisible} toggle={this.toggleAddTimeModal} className={'add-time-modal'}>
            <ModalHeader toggle={this.toggleAddTimeModal} className='text-left font-bold'>Add time</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm={12} md={7}>
                  <Row>
                    sdreytr
                  </Row>
                </Col>
                <Col sm={12} md={5}>
                  <Row>
                   yty
                  </Row>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className='add-time-footer'>
            <Button color="secondary" onClick={this.toggleAddTimeModal}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.toggleAddTimeModal}>Save</Button>
          </ModalFooter>
          </Modal>
          {/* <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Capacity</p>
                        <CardTitle tag="p">150GB</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o" />
                    Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">$34,657</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="success" pill>
                          +18%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    total earnings in last ten quarters
                  </h6>
                  <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">Financial Statistics</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          size="sm"
                        >
                          <i className="nc-icon nc-simple-add" />
                        </Button>
                      </div>
                    </Col>  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">169</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="danger" pill>
                          -14%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">
                    total subscriptions in last 7 days
                  </h6>
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                    height={380}
                    width={828}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View all members</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="danger"
                          size="sm"
                        >
                          <i className="nc-icon nc-button-play" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">8,960</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="warning" pill>
                          ~51%
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title">total downloads in last 6 years</h6>
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title">View more details</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="warning"
                          size="sm"
                        >
                          <i className="nc-icon nc-alert-circle-i" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Global Sales by Top Locations</CardTitle>
                  <p className="card-category">
                    All products that were shipped
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                            <td className="text-right">53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                            <td className="text-right">20.43%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                            <td className="text-right">10.35%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                            <td className="text-right">7.87%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                            <td className="text-right">5.94%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("assets/img/flags/BR.png")}
                                />
                              </div>
                            </td>
                            <td>Brasil</td>
                            <td className="text-right">550</td>
                            <td className="text-right">4.34%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col className="ml-auto mr-auto" md="6">
                      <VectorMap
                        map={"world_mill"}
                        backgroundColor="transparent"
                        zoomOnScroll={false}
                        containerStyle={{
                          height: "300px"
                        }}
                        containerClassName="map"
                        regionStyle={{
                          initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                          }
                        }}
                        series={{
                          regions: [
                            {
                              values: mapData,
                              scale: ["#AAAAAA", "#444444"],
                              normalizeFunction: "polynomial"
                            }
                          ]
                        }}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Tasks</CardTitle>
                  <h5 className="card-category">Backend development</h5>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip42906017"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip42906017"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip570363224"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip570363224"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip584875601"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip584875601"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip517629613"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip517629613"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/kaci-baum-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Using dummy content or fake information in the Web
                            design process can result in products with
                            unrealistic
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip792337830"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792337830"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip731952378"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731952378"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/joe-gardner-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip825783733"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip825783733"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip285089652"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip285089652"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh spin" />
                    Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">2018 Sales</CardTitle>
                  <p className="card-category">All products including Taxes</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Tesla Model S <i className="fa fa-circle text-danger" />
                    BMW 5 Series
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" />
                    Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample5.data}
                    options={chartExample5.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Open
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>New Visitators</CardTitle>
                  <p className="card-category">Out Of Total Number</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample6.data}
                    options={chartExample6.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-warning" />
                    Visited
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" />
                    Campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Orders</CardTitle>
                  <p className="card-category">Total number</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample7.data}
                    options={chartExample7.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-danger" />
                    Completed
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" />
                    Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                  <p className="card-category">Our Users</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample8.data}
                    options={chartExample8.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-secondary" />
                    Ended
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" />
                    Total users
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}

          <div className="contentHeader">
            <Row>
              <Col><h2 className="headerTop">Dashboard (Mon, Nov 26, 2018 - Sun, Dec 2, 2018)</h2></Col>
            </Row>
          </div> 
          <div className="pagecontent ">
            <Row>
              <Col lg="4" md="6" sm="6">
                <Card className="card-stats" style={{background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)", color:"white"}}>
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img src={TotalHours} style={{ padding: '3px 40px 8px 2px'}}/>
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category text-white">Total Hours</p>
                          <CardTitle tag="p">1hr</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats text-white">
                      <i className="fa fa-refresh" />
                      Total hours in all Projects
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col lg="4" md="6" sm="6">
                <Card className="card-stats" style={{background: "linear-gradient(to right,  #55baff 0%, #6a6fff 100%)"}}>
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                        <img src={MostHours} style={{ padding: '3px 40px 8px 2px'}}/>
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category text-white">Most Hours</p>
                          <CardTitle tag="p" className="text-white">23 h</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats text-white" >
                      <i className="fa fa-clock-o" />
                      Least our  spend in softspace1
                    </div>
                  </CardFooter>
                </Card>
              </Col>

              <Col lg="4" md="6" sm="6">
                <Card className="card-stats" style={{background: "linear-gradient(to right,  #ff5592 0%, #ff6a9c 100%)"}}>
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                        <img src={LeastHours} style={{ padding: '3px 40px 8px 2px'}}/>
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category text-white">Least Hours</p>
                          <CardTitle tag="p" className="text-white">20 hours</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats text-white" >
                      <i className="fa fa-calendar-o" />
                      Total earning for last ten quarter
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>             
            <Row className="mt-4">
              <Col lg="4" md="6" sm="6"> 
              <Row>     
                           
                  <Col md="12">

                  <Modal isOpen={addTimeModalVisible} toggle={this.toggleAddTimeModal} className={'add-time-modal'}>
            <ModalHeader toggle={this.toggleAddTimeModal} className='text-left font-bold'>Projects list by Spacesoft</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm={12} md={12}>
                  <Row>
                  <Table responsive>
                          {/* <thead>
                            <tr>
                              <th>Project</th>
                                                         
                            </tr>
                          </thead> */}
                          <tbody>
                            <tr>
                              <td><span className="bg-primary projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development </span></td>
                                                      
                            </tr>
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>   
                            <tr>
                              <td><span className="bg-danger projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                            
                            </tr>  
                            <tr>
                         <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>                           
                          </tbody>                          
                        </Table>
                  </Row>
                </Col>
             
              </Row>
            </ModalBody>
            <ModalFooter className='add-time-footer'>
            <Button color="primary" onClick={this.toggleAddTimeModal}>Close</Button>
          </ModalFooter>
          </Modal>
                    <Card className="dashboardTable">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            <h4>33 Projects</h4>
                          </Col>
                          
                        </Row>
                      </CardHeader>
                      <CardBody>


                        <Table responsive>
                          {/* <thead>
                            <tr>
                              <th>Project</th>
                                                         
                            </tr>
                          </thead> */}
                          <tbody>
                            <tr>
                              <td><span className="bg-primary projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development </span></td>
                                                      
                            </tr>
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>   
                            <tr>
                              <td><span className="bg-danger projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                            
                            </tr>  
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>                           
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Row>
                        <Col md="6" xs="6">
                            Projects list by Spacesoft
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                          <CustomButton
                    classname="btn-round mb-3 buttonStyle"
                  
                    onClickHandler={() => {
                      // this.handleChangePassword();
                      this.toggleAddTimeModal()
                    }}
                    size="md"
                    text="See more"
                  />
                          </Col>
                        </Row>
                       
                      </CardFooter>
                    </Card>
                  </Col>                  
                </Row>
              
              </Col>           
              <Col lg="4" md="6" sm="6"> 
              <Row>                
                  <Col md="12">
                    <Card className="dashboardTable">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            <h4>33 Projects</h4>
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                          <Badge color="success" pill>
                                  top 4
                                </Badge>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          {/* <thead>
                            <tr>
                              <th>Project</th>
                                                         
                            </tr>
                          </thead> */}
                          <tbody>
                            <tr>
                              <td><span className="bg-primary projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development </span></td>
                                                      
                            </tr>
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>   
                            <tr>
                              <td><span className="bg-danger projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                            
                            </tr>  
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>                           
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Row>
                        <Col md="6" xs="6">
                            Task for spacesoft on Apploye
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                          <CustomButton
                    classname="btn-round mb-3 buttonStyle"
                  
                    onClickHandler={() => {
                      // this.handleChangePassword();
                    }}
                    size="md"
                    text="See more"
                  />
                          </Col>
                        </Row>
                       
                      </CardFooter>
                    </Card>
                  </Col>                  
                </Row>
              
              </Col> 
              <Col lg="4" md="6" sm="6"> 
              <Row>                
                  <Col md="12">
                    <Card className="dashboardTable">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            <h4>Projects Progress</h4>
                          </Col>
                          
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          {/* <thead>
                            <tr>
                              <th>Project</th>
                                                         
                            </tr>
                          </thead> */}
                          <tbody>
                            <tr>
                              <td><span className="bg-primary projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development </span></td>
                                 <td><span className="mlr10">10hours</span></td>                     
                            </tr>
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                 <td> <span className="mlr10">45hours</span></td>                 
                            </tr>   
                            <tr>
                              <td><span className="bg-danger projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                              <td><span className="mlr10"> 70hours</span></td>
                            
                            </tr>  
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                <td><span className="mlr10">30hours</span></td>                   
                            </tr>                           
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Row>
                        <Col md="6" xs="6">
                            Projects Progress By hours1
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                          <CustomButton
                    classname="btn-round mb-3 buttonStyle"
                  
                    onClickHandler={() => {
                      // this.handleChangePassword();
                    }}
                    size="md"
                    text="See more"
                  />
                          </Col>
                        </Row>
                       
                      </CardFooter>
                    </Card>
                  </Col>                  
                </Row>
              
              </Col> 
              <Col lg="4" md="6" sm="6"> 
              <Row>                
                  <Col md="12">
                    <Card className="dashboardTable">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                            <h4>33 Projects</h4>
                          </Col>
                          
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          {/* <thead>
                            <tr>
                              <th>Project</th>
                                                         
                            </tr>
                          </thead> */}
                          <tbody>
                            <tr>
                              <td><span className="bg-primary projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development </span></td>
                                                      
                            </tr>
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>   
                            <tr>
                              <td><span className="bg-danger projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                            <td>
                            <span className="mlr10">70hours</span>
                            </td>
                            </tr>  
                            <tr>
                              <td><span className="bg-warning projectLetter list_button"></span> <span className="mlr10"> APPLOYEE - Development</span></td>
                                                   
                            </tr>                           
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Row>
                        <Col md="6" xs="6">
                            Projects list by Spacesoft
                          </Col>
                          <Col md="6" xs="6" className="text-right">
                          <CustomButton
                    classname="btn-round mb-3 buttonStyle"
                  
                    onClickHandler={() => {
                      // this.handleChangePassword();
                    }}
                    size="md"
                    text="See more"
                  />
                          </Col>
                        </Row>
                       
                      </CardFooter>
                    </Card>
                  </Col>                  
                </Row>     
              </Col>
            </Row> 
          </div> 
        </div>  
      </>
    );
  }
}

export default Dashboard;

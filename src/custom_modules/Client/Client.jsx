import React from 'react';
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
  Input,
  Progress,
  TabContent, TabPane, Nav, NavItem, NavLink,
  CardTitle,
  CardText,
} from "reactstrap";
import classnames from 'classnames';


class Client extends React.Component {
  state = {
    activeTab: '1'
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (

      <div className="content">
        <Row>
          <h3 className='remove-default-mt'>Client</h3>
        </Row>

        <Row>

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Tab1
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Moar Tabs
            </NavLink>
            </NavItem>
          </Nav>
          <Col md="8">
            <input type="text" name="email" id="exampleEmail" style={{ width: '300px', background: 'white', marginTop:'0px'}} className="form-control" placeholder="with a placeholder" />
          </Col>
          <Col>
            <Button
              style={{ background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)" }}
              className="text-center">Add manual time
          </Button>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md="12">
                <Card className="dashboardTable tableBigHeight">
                  <CardBody>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Client Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Organization</th>
                          <th>Contact</th>
                          <th>Action</th>
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
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
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
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col md="12">
                <Card className="dashboardTable tableBigHeight">
                  <CardBody>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Client Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Organization</th>
                          <th>Contact</th>
                          <th>UnArchive</th>
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
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              08:05:53
                                  </div>
                          </td>
                          <td>
                            <div>
                              unArchive
                                  </div>
                          </td>

                        </tr>

                      </tbody>
                    </Table>
                  </CardBody>

                </Card>
              </Col>
            </Row>
          </TabPane>

        </TabContent>


      </div>

    );
  }
}


export default Client;
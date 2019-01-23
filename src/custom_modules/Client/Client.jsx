import React from 'react'
import {
    Form,
    FormText,
    InputGroup,
    InputGroupAddon,
    Container,
    Nav,
    NavItem,
    NavLink,
    TabPane,
    TabContent,
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
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    UncontrolledTooltip
} from "reactstrap";
import '../Organization/organization.css';
import classnames from 'classnames';
import ReactTable from "react-table";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { reduxInput, reduxTextarea } from '../../components/reduxInput/reduxInput';
import { reduxDatepicker } from '../../components/reduxDatePicker/reduxDatepicker';

const initialState = {
    clientName: '',
    clientAddress: '',
    clientEmail: '',
    clientOrganization: '',
    clientContact: '',
    modalVisible: false,
    modalHeader: '',
    activeTab: '1',
    row: [],
    ClientList: [{
        id: '1',
        client_name: 'Spacesoft',
        client_address: '100/4, road-6, Hubstaff',
        client_email: 'Software Industry',
        client_organization: 'Spacesoft',
        client_contact: '+800 1234 1234',
    },
    {
        id: '2',
        client_name: 'Spacesoft',
        client_address: '100/4, road-6, Hubstaff',
        client_email: 'Software Industry',
        client_organization: 'Spacesoft',
        client_contact: '+800 1234 1234',
    },
    {
        id: '3',
        client_name: 'Spacesoft',
        client_address: '100/4, road-6, Hubstaff',
        client_email: 'Software Industry',
        client_organization: 'Spacesoft',
        client_contact: '+800 1234 1234',
    },
    ]
}






class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    handleChange = (e) => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    handleSubmit = () => {
        console.log('open a modal');
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    addArchive = () => {
        console.log('add to archived');
    }
    editModal = (row) => {
        // console.log(row.original)
        this.setState({
            modalVisible: !this.state.modalVisible,
            clientName: row.original.client_name,
            clientAddress: row.original.client_address,
            clientEmail: row.original.client_email,
            clientOrganization: row.original.client_organization,
            clientContact: row.original.client_contact
        })
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
        })
    }

    openModal = () => {
        console.log('this is modal open');
        this.setState({
            modalVisible: true
        })
    }
    render() {
        const { modalVisible, modalHeader, ClientList } = this.state;
        return (
            <>
                <div className="content">
                    <Modal backdrop={false} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
                        <ModalHeader toggle={this.toggleModal}>Add Organization</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="name" sm={4}>Client Name</Label>
                                    <Col sm={8}>
                                        <Input type="text" value={this.state.clientName} onChange={this.handleChange} style={{ marginTop: '0px' }} name="clientName" id="organizationname" placeholder="Organization Name" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="address" sm={4}>Client Address</Label>
                                    <Col sm={8}>
                                        <Input value={this.state.clientAddress} type="text" onChange={this.handleChange} style={{ marginTop: '0px' }} name="clientAddress" id="address" placeholder="Address" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="organizationType" sm={4}>Email</Label>
                                    <Col sm={8}>
                                        <Input value={this.state.clientEmail} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="clientEmail" id="organizationType">
                                            <option>Software Industry</option>
                                            <option>Construction</option>
                                            <option>Healthcare</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="timezone" sm={4}>Organization</Label>
                                    <Col sm={8}>
                                        <Input value={this.state.clientOrganization} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="clientOrganization" id="timezone" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="plan" sm={4}>Contact</Label>
                                    <Col sm={8}>
                                        <Input type="select" onChange={this.handleChange} value={this.state.clientContact} style={{ marginTop: '0px' }} name="clientContact" id="type">
                                            <option>Monitored</option>
                                            <option>Unmonitored</option>

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
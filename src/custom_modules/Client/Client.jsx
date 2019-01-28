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
import { connect } from 'react-redux';
import { getClient, update, create, unArchived } from './clientAction';

const initialState = {
  id: '',
  editMode: false,
  clientName: '',
  clientAddress: '',
  clientEmail: '',
  clientOrganization: '',
  clientContact: '',
  modalVisible: false,
  modalHeader: '',
  activeTab: '1',
  row: [],
  archived: [{
    id: '4',
    client_name: 'Spacesoft',
    client_address: '100/4, road-6, Hubstaff',
    client_email: 'Software Industry',
    client_organization: 'Spacesoft',
    client_contact: '+800 1234 1234',
  }],
  ClientList: [],
  is_active: false,
  searchTerm: '',
  searchLoading: '',
  searchResult: [],
}






class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  UNSAFE_componentWillReceiveProps(props) {
    console.log(props.done)
    if (this.props.done === false && props.done === true) {
      this.setState({
        modalVisible: false
      })
    }
  }
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { clientName, clientAddress, clientEmail, clientOrganization, clientContact, is_active } = this.state;
    let obj = {
      name: clientName,
      client_organization: clientOrganization,
      address: clientAddress,
      description: '',
      email: clientEmail,
      // contact: clientContact,
      organization: `4457e6ce-0e21-4342-8779-6e409e44c17c`,
      is_active,
    }
    if (this.state.editMode === false) {
      this.props.create(obj)
    }
    else {
      const payload = {
        id: this.state.id,
        obj
      }
      this.props.update(payload)
    }
  }
  componentDidMount() {
    this.props.clientsList();
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  addArchive = (row) => {
    this.setState({
      is_active: !this.state.is_active
    })
    console.log('add to archived');
    let obj = {
      id: row.original.id,
      is_active: true,
    }
    this.props.archive(obj)
  }

  unArchive = () => {
    console.log('this is unarchive');
  }

  editModal = (row) => {
    this.setState({
      id: row.original.id,
      editMode: true,
      modalVisible: !this.state.modalVisible,
      clientName: row.original.name,
      clientAddress: row.original.address,
      clientEmail: row.original.email,
      clientOrganization: row.original.client_organization,
      clientContact: row.original.contact
    })
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      editMode: false,
    })
  }

  openModal = () => {
    console.log('this is modal open');
    this.setState({
      modalVisible: true
    })
  }
  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      searchLoading: true,
    }, () => this.handleSearch())
  }

  handleSearch = () => {
    console.log(this.props.clients)
    const regex = new RegExp(this.state.searchTerm, 'gi');
    const searchResult = this.props.clients.reduce((acc, org) => {
      console.log("======", acc, org)
      if (org.name && org.name.match(regex)) {
        acc.push(org);
      }
      return acc;
    }, [])
    this.setState({ searchResult })
    setTimeout(() => this.setState({ searchLoading: false }), 500)
  }
  render() {
    // console.log(this.props.clients)
    const { clients } = this.props;
    const { modalVisible, modalHeader, ClientList, archived, searchTerm, searchResult } = this.state;
    return (
      <>
        <div className="content">
          <Modal backdrop={true} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
            <ModalHeader toggle={this.toggleModal}>Add Client</ModalHeader>
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
                    <Input value={this.state.clientEmail} onChange={this.handleChange} style={{ marginTop: '0px' }} name="clientEmail" id="organizationType" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="timezone" sm={4}>Organization</Label>
                  <Col sm={8}>
                    <Input value={this.state.clientOrganization} onChange={this.handleChange} style={{ marginTop: '0px' }} name="clientOrganization" id="timezone" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="plan" sm={4}>Contact</Label>
                  <Col sm={8}>
                    <Input onChange={this.handleChange} value={this.state.clientContact} style={{ marginTop: '0px' }} name="clientContact" id="type">
                      <option>Monitored</option>
                      <option>Unmonitored</option>
                      <option>Unmonitored Field Service</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup submit>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>

          </Modal>
          <Container>
            <Row className="tabs-container">
              <Nav tabs>
                <NavItem>
                  <NavLink

                    className={classnames({ 'tab-active': this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    Client List
                        </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ 'tab-active': this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    Archived
                        </NavLink>
                </NavItem>
              </Nav>
              <Input onChange={(e) => this.handleSearchChange(e)} style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
              <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Client</Button>
            </Row>
          </Container>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm={12}>
                  <ReactTable
                    pageSizeOptions={[10, 20, 50]}
                    data={searchTerm ? searchResult : clients && clients}
                    columns={[
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Name
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "name",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Address
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "address",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Email
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "email",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Organization
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_organization",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Contact
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_contact",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Actions
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "id",
                        Cell: row => (
                          <div className='text-center'>
                            {console.log(row)}
                            <span>
                              <i className='fa fa-edit editProject' onClick={() => this.editModal(row)} />
                              {
                                row.original.is_active
                                  ? <Button disabled outline color="primary" size="sm" onClick={() => this.addArchive(row)}>Archived</Button>
                                  : <Button outline color="primary" size="sm" onClick={() => this.addArchive(row)}>Archive</Button>
                              }
                            </span>
                          </div>
                        )
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm={12}>
                  <ReactTable
                    pageSizeOptions={[10, 20, 50]}
                    data={archived}
                    columns={[
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Name
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_name",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Address
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_address",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Email
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_email",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Organization
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_organization",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Contact
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "client_contact",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center'>
                              {row.value}
                            </span>
                          </div>
                        )
                      },
                      {
                        Header: () => (
                          <span className='table-header-style'>
                            Actions
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "id",
                        Cell: row => (
                          <div className='text-center'>
                            <span>
                              <i className='fa fa-edit editProject' onClick={() => this.editModal(row)} />
                              <Button outline color="secondary" size="sm" onClick={this.unArchive}>Unarchive</Button>
                            </span>
                          </div>
                        )
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientReducer.clients,
  done: state.clientReducer.done
})

const mapDispatchToProps = (dispatch) => ({
  clientsList: () => { dispatch(getClient()) },
  update: (payload) => { dispatch(update(payload)) },
  create: (payload) => { dispatch(create(payload)) },
  archive: (payload) => { dispatch(unArchived(payload)) },
  // search: () => { dispatch() }
})
export default connect(mapStateToProps, mapDispatchToProps)(Client);
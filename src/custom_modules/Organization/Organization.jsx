import React from 'react'
import {
  Form,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Badge,
  Button,
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
import './organization.css';
import classnames from 'classnames';
import ReactTable from "react-table";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { getOrganizations, create, getOrgTypes, updateOrg, archiveOrg, } from './organizationAction'
import { reduxInput, reduxTextarea } from '../../components/reduxInput/reduxInput';
import { reduxDatepicker } from '../../components/reduxDatePicker/reduxDatepicker';
import { createNotification } from '../../modules/notificationManager';
const initialState = {
  orgName: '',
  orgAddress: '',
  orgType: '',
  orgTimeZone: '',
  orgPlan: '',
  editMode: false,
  modalVisible: false,
  modalHeader: '',
  activeTab: '1',
  row: [],
  orgIsActive: false,
  archived: [{
    id: '4',
    organization_name: 'Spacesoft',
    organization_address: '100/4, road-6, Hubstaff',
    organization_type: 'Software Industry',
    organization_timezone: 'Dhaka, Bangladesh UTC +6',
    organization_plan: 'Monitored',
  }],
  searchResult: [],
  searchTerm: '',
  searchLoading: false,
  archivedList: [],
}

class Organization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  componentDidMount() {
    this.props.organizations()
    this.props.getOrgTypes()
  }

  componentWillReceiveProps(props) {
    if (this.props.errors !== props.errors) {
      console.log(props.errors)
      createNotification('error', 'permission denied', 2000);
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      searchLoading: true,
    }, () => this.handleSearchMessges());
  }

  handleSearchMessges = () => {
    const regex = new RegExp(this.state.searchTerm, 'gi');
    const searchResult = this.props.organizationsList.reduce((acc, org) => {
      if (org.name && org.name.match(regex)) {
        acc.push(org);
      }
      return acc;
    }, [])
    this.setState({ searchResult })
    setTimeout(() => this.setState({ searchLoading: false }), 500)
  }

  archivedList = () => {
    const archivedList = this.props.organizationsList.reduce((acc, archived) => {
      if (archived.is_active === true) {
        acc.push(archived);
      }
      return acc;
    }, [])
    this.setState({ archivedList })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { orgName, orgAddress, orgType, orgTimeZone, orgPlan, orgIsActive } = this.state;
    let obj = {
      name: orgName,
      description: "asdfsdf",
      address: orgAddress,
      timezone: orgTimeZone,
      // logo": base64 image png, jpeg or jpeg, 
      organization_type: orgType,
    }
    if (this.state.editMode === false) {
      const createPayload = {
        is_active: false,
        ...obj
      }
      this.props.createOrg(createPayload)
    }
    else {
      const obj = {
        is_active: orgIsActive,
        name: orgName,
        address: orgAddress,
        timezone: orgTimeZone,
        organization_type: orgType,
      }
      const editPayload = {
        id: this.state.id,
        obj
      }
      this.props.updateOrganization(editPayload)
      this.clearState()
    }
    this.toggleModal();


    // :
    // 
  }


  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  unArchive = () => {
    console.log('this is unarchive');
  }

  addArchive = (row) => {
    let id = row.original.id
    let is_active = row.original.is_active;
    let obj = {
      id,
      is_active: !is_active,
    }
    if (obj) {
      this.props.archive(obj);
    }
    this.toggle('1')
  }

  editModal = (row) => {
    this.setState({
      id: row.original.id,
      editMode: true,
      modalVisible: !this.state.modalVisible,
      orgName: row.original.name,
      orgAddress: row.original.address,
      orgType: row.original.organization_type,
      orgTimeZone: row.original.timezone,
      orgIsActive: row.original.is_active,
    })
  }

  clearState = () => {
    this.setState({
      orgName: '',
      orgAddress: '',
      orgType: '',
      orgTimeZone: '',
    })
  }

  toggleModal = () => {
    this.clearState()
    this.setState({
      modalVisible: !this.state.modalVisible,
      editMode: false,
    })
  }

  openModal = () => {
    this.setState({
      modalVisible: true
    })
  }
  render() {
    const { organizationsList, orgTypes } = this.props
    const { modalVisible, modalHeader, OrganizationList, archived } = this.state;
    return (
      <>
        <div className="content">
          <Modal backdrop={true} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
            <ModalHeader toggle={this.toggleModal}>Add Organization</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="name" sm={4}>Organization Name</Label>
                  <Col sm={8}>
                    <Input type="text" value={this.state.orgName} onChange={this.handleChange} style={{ marginTop: '0px' }} name="orgName" id="organizationname" placeholder="Organization Name" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="address" sm={4}>Address</Label>
                  <Col sm={8}>
                    <Input value={this.state.orgAddress} type="text" onChange={this.handleChange} style={{ marginTop: '0px' }} name="orgAddress" id="address" placeholder="Address" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="organizationType" sm={4}>Organization Type</Label>
                  <Col sm={8}>
                    <Input value={this.state.orgType} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="orgType" id="organizationType">
                      {
                        orgTypes && orgTypes.map((types, i) => (
                          <option key={i} value={types.id}>{types.name}</option>
                        ))
                      }

                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="timezone" sm={4}>Time Zone</Label>
                  <Col sm={8}>
                    <Input value={this.state.orgTimeZone} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="orgTimeZone" id="timezone">

                      <option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="GMT-12">(GMT-12:00) International Date Line West</option>
                      <option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="GMT-11">(GMT-11:00) Midway Island, Samoa</option>
                      <option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="GMT-10">(GMT-10:00) Hawaii</option>
                      <option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="GMT-09">(GMT-09:00) Alaska</option>
                      <option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="GMT-08">(GMT-08:00) Pacific Time (US & Canada)</option>
                      <option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="GMT-08">(GMT-08:00) Tijuana, Baja California</option>
                      <option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="GMT-07">(GMT-07:00) Arizona</option>
                      <option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="GMT-07">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                      <option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="GMT-07">(GMT-07:00) Mountain Time (US & Canada)</option>
                      <option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="GMT-06">(GMT-06:00) Central America</option>
                      <option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="GMT-06">(GMT-06:00) Central Time (US & Canada)</option>
                    </Input>

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="plan" sm={4}>Plan</Label>
                  <Col sm={8}>
                    <Input type="select" onChange={this.handleChange} value={this.state.orgPlan} style={{ marginTop: '0px' }} name="orgPlan" id="type">
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
                    Organization List
                        </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ 'tab-active': this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); this.archivedList() }}
                    style={{ cursor: 'pointer' }}
                  >
                    Archived
                        </NavLink>
                </NavItem>
              </Nav>
              <Input style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" name="searchTerm" onChange={this.handleSearchChange} onLoad={this.state.searchLoading} />
              <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Organization</Button>
            </Row>
          </Container>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm={12}>
                  <ReactTable
                    pageSizeOptions={[10, 20, 50]}
                    data={this.state.searchTerm ? this.state.searchResult : organizationsList && organizationsList}
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
                            Organization Type
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "organization_type",
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
                            Time Zone
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "timezone",
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
                            Plan
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "organization_plan",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center table-status-style' style={{ border: '1px', borderRadius: '20px', backgroundImage: 'linear-gradient(to right, #26D0CE,#1A2980)' }}>
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
                              {
                                row.original.is_active
                                  ? <Button outline color="success" size="sm" onClick={() => this.addArchive(row)}>UnArchive</Button>
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
                    data={this.state.archivedList && this.state.archivedList}
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
                            Organization Type
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "organization_type",
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
                            Time Zone
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "timezone",
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
                            Plan
                                            </span>
                        ),
                        headerClassName: 'text-center',
                        sortable: false,
                        accessor: "organization_plan",
                        Cell: row => (
                          <div className='text-center'>
                            <span className='text-center table-status-style' style={{ border: '1px', borderRadius: '20px', backgroundImage: 'linear-gradient(to right, #26D0CE,#1A2980)' }}>
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
                              <Button outline color="secondary" size="sm" onClick={() => this.addArchive(row)}>Unarchive</Button>
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
const mapStateToProps = (state) => {
  return {
    organizationsList: state.organizations.organizatins,
    orgTypes: state.organizations.orgTypes,
    errors: state.organizations.errors,
    archive: state.organizations.archived,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    organizations: (payload) => { dispatch(getOrganizations(payload)) },
    createOrg: (payload) => { dispatch(create(payload)) },
    getOrgTypes: (payload) => { dispatch(getOrgTypes(payload)) },
    updateOrganization: (payload) => { dispatch(updateOrg(payload)) },
    archive: (payload) => { dispatch(archiveOrg(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
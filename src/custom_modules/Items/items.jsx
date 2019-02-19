import React, { Fragment } from 'react'
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
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  ModalHeader,
  UncontrolledTooltip
} from "reactstrap";

import ReactTable from "react-table";
import { connect } from 'react-redux';
import { getItems, update, create, } from './itemsAction';
// import { Modal, ModalBody, ModalFooter } from '../../views/components';
// import { openModal, closeModal } from '../../views/components/Modal/modal.action'
import * as Yup from 'yup';
import { Formik } from 'formik';


const validation = {
  email: Yup
    .string('This is not a valid string')
    .email('Email is not valid')
    .min(3, 'Email should be at least of 3 characters')
    .required('Email is required')
    .trim(),
}

class Items extends React.Component {
  state = {
    items: [],
    modalVisible: false,
    editMode: false,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
    this.props.getItems();
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      editMode: false,
    })
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

  openModal = () => {
    this.setState({ modalVisible: true })
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    const { items, modalVisible } = this.state;
    return (
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


            <Input style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
            <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Items</Button>
          </Row>
        </Container>

        <ReactTable
          pageSizeOptions={[10, 20, 50]}
          data={items && items}
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
      </div>
    )
  }
}

// const mapStateToProps = ({ forgotPassword }) => ({
//   forgotPasswordResponse: forgotPassword.forgotPasswordResponse,
//   isLoading: forgotPassword.isLoading,
//   errors: forgotPassword.errors,
// })

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  create: (payload) => dispatch(create(payload)),
  update: (payload) => dispatch(update(payload))
})

export default connect(null, mapDispatchToProps)(Items)
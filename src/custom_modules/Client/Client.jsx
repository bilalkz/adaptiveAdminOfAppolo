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
    archived: [{
        id: '4',
        client_name: 'Spacesoft',
        client_address: '100/4, road-6, Hubstaff',
        client_email: 'Software Industry',
        client_organization: 'Spacesoft',
        client_contact: '+800 1234 1234',
    }],
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

    unArchive = () => {
        console.log('this is unarchive');
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
        const { modalVisible, modalHeader, ClientList, archived } = this.state;
        return (
            <>
                <div className="content">
                    <Modal backdrop={false} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
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
                            <Input style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
                            <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Client</Button>
                        </Row>
                    </Container>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm={12}>
                                    <ReactTable
                                        pageSizeOptions={[10, 20, 50]}
                                        data={ClientList}
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
                                                            <Button outline color="primary" size="sm" onClick={this.addArchive}>Archive</Button>
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

export default Client;
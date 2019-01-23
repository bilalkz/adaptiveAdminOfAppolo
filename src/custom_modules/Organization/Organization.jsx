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
import './organization.css';
import classnames from 'classnames';
import ReactTable from "react-table";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { reduxInput, reduxTextarea } from '../../components/reduxInput/reduxInput';
import { reduxDatepicker } from '../../components/reduxDatePicker/reduxDatepicker';

const initialState = {
    modalVisible: false,
    modalHeader: '',
    activeTab: '1',
    OrganizationList: [{
        id: '1',
        organization_name: 'Spacesoft',
        organization_address: '100/4, road-6, Hubstaff',
        organization_type: 'Software Industry',
        organization_timezone: 'Dhaka, Bangladesh UTC +6',
        organization_plan: 'Monitored',

    },
    {
        id: '2',
        organization_name: 'Spacesoft',
        organization_address: '100/4, road-6, Hubstaff',
        organization_type: 'Construction',
        organization_timezone: 'Dhaka, Bangladesh UTC +6',
        organization_plan: 'Unmonitored',

    },
    {
        id: '3',
        organization_name: 'Spacesoft',
        organization_address: '100/4, road-6, Hubstaff',
        organization_type: 'Healthcare',
        organization_timezone: 'Dhaka, Bangladesh UTC +6',
        organization_plan: 'Unmonitored Field Service',

    },
    ]
}






class Organization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
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
    
    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    openModal = () => {
        console.log('this is modal open');
        this.setState({
            modalVisible: true
        })
    }
    render() {
        const { modalVisible, modalHeader, OrganizationList } = this.state;
        return (
            <>
                <div className="content">
                    <Modal backdrop={false} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%'}} className='add-project-modal'>
                        <form onSubmit={this.handleSubmit()}>
                            <ModalHeader toggle={this.toggleModal}>Add Organization</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="name" sm={4}>Organization Name</Label>
                                        <Col sm={8}>
                                            <Input type="text"  style={{ marginTop: '0px' }} id="organizationname" placeholder="Organization Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="address" sm={4}>Address</Label>
                                        <Col sm={8}>
                                            <Input type="text" style={{ marginTop: '0px' }}  id="address" placeholder="Address" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="organizationType" sm={4}>Organization Type</Label>
                                        <Col sm={8}>
                                            <Input type="select" style={{ marginTop: '0px' }} name="select" id="organizationType" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="timezone" sm={4}>Time Zone</Label>
                                        <Col sm={8}>
                                            <Input type="select" style={{ marginTop: '0px' }} name="select" id="timezone" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="type" sm={4}>Type</Label>
                                        <Col sm={8}>
                                            <Input type="select" style={{ marginTop: '0px' }} name="select" id="type" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup submit>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button>Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                        </form>
                    </Modal>
                    <Container>
                        <Row className="tabs-container">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink

                                        className={classnames({ 'tab-active': this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Organization List
                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ 'tab-active': this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Archived
                        </NavLink>
                                </NavItem>
                            </Nav>
                            <Input style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
                            <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Organization</Button>
                        </Row>
                    </Container>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm={12}>
                                    <ReactTable
                                        pageSizeOptions={[10, 20, 50]}
                                        data={OrganizationList}
                                        columns={[
                                            {
                                                Header: () => (
                                                    <span className='table-header-style'>
                                                        Name
                                            </span>
                                                ),
                                                headerClassName: 'text-center',
                                                sortable: false,
                                                accessor: "organization_name",
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
                                                accessor: "organization_address",
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
                                                accessor: "organization_timezone",
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
                                                            <i className='fa fa-edit editProject' onClick={() => this.toggleModal('Update project', row.original)} />
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

                        </TabPane>
                    </TabContent>
                </div>
            </>
        );
    }
}

export default Organization;
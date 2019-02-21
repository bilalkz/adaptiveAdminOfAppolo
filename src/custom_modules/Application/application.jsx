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
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    UncontrolledTooltip
} from "reactstrap";

import ReactTable from "react-table";
import { connect } from 'react-redux';
import { getList, update, create, deleteAPPLICATION } from './appAction';
import Loader from '../../modules/loader';



class Application extends React.Component {
    state = {
        id: null,
        applications: [],
        name: '',
        modalVisible: false,
        deleteModalVisible: false,
        editMode: false,
        deleteMode: false,
        searchResult: [],
        searchTerm: '',
        searchLoading: false,
        loading: false,
    }

    componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log(prevProps);
        if (prevProps !== this.props) {
            if (this.props.application) {
                console.log(this.props.application)
                this.setState({
                    applications: this.props.application,
                    loading: this.props.loading,
                    modalVisible: false,
                    deleteModalVisible: false,
                })
            }
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const { name, id } = this.state;
        const data = new FormData()

        console.log(data);

        if (this.state.editMode === false && this.state.deleteMode === false) {
            data.append('name', name);
            this.props.create(data)
        }
        else {
            if (this.state.editMode === true && this.state.deleteMode === false) {
                data.append('id', id)
                data.append('name', name);
                this.props.update(data)
            }
        }

        if (this.state.deleteMode === true) {
            data.append('id', this.state.id)
            this.props.delete(data)
        }
    }

    componentDidMount() {
        this.props.getList();
    }

    openDeleteModal = () => {
        this.setState({
            deleteModalVisible: true
        })
    }

    toggleDeleteModal = () => {
        this.setState({
            deleteModalVisible: !this.state.deleteModalVisible,
            deleteMode: false,
        })
    }

    deleteModal = (row) => {
        this.setState({
            id: row.original.id,
            deleteMode: true,
            deleteModalVisible: !this.state.deleteModalVisible,
        })
    }

    editModal = (row) => {
        this.setState({
            id: row.original.id,
            editMode: true,
            modalVisible: !this.state.modalVisible,
            name: row.original.name,
        })
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            editMode: false,
            deleteMode: false,
            name: '',
        })
    }

    openModal = () => {
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
        const regex = new RegExp(this.state.searchTerm, 'gi');
        const searchResult = this.state.applications.reduce((acc, app) => {
            if (app.name && app.name.match(regex)) {
                acc.push(app);
            }
            return acc;
        }, [])
        this.setState({ searchResult })
        setTimeout(() => this.setState({ searchLoading: false }), 500)
    }

    render() {
        // const { media } = this.props;
        const { deleteModalVisible, applications, modalVisible, searchTerm, searchResult } = this.state;
        console.log(applications);
        console.log(modalVisible)
        console.log(deleteModalVisible)

        return (
            <div className="content">
                {this.state.loading ? <Loader /> : ''}
                <Modal backdrop={true} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
                    <ModalHeader toggle={this.toggleModal}>Add Application</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="name" sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input type="text" value={this.state.name} onChange={this.handleChange} style={{ marginTop: '0px' }} name="name" placeholder="Application Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                {this.props.errors
                                    ?
                                    <Fragment> <Label for="errors" sm={4}>Errors</Label>
                                        <Col sm={8}>
                                            <Label className="text-danger">{this.props.errors}</Label>
                                        </Col>
                                    </Fragment>
                                    : ''}
                            </FormGroup>
                            <FormGroup submit>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>

                <Modal backdrop={true} isOpen={deleteModalVisible} toggle={this.toggleDeleteModal} style={{ width: '100%' }} className='add-project-modal'>
                    <ModalHeader toggle={this.toggleDeleteModal}>delete Application</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="address" sm={10}>Are you sure you want to delete this Application <span style={{ color: 'red' }}>{this.state.name}</span> ?</Label>
                            </FormGroup>
                            <FormGroup row>
                                {this.props.errors
                                    ?
                                    <Fragment> <Label for="address" sm={4}>Errors</Label>
                                        <Col sm={8}>
                                            <Label color="danger">{this.props.errors}</Label>
                                        </Col>
                                    </Fragment>
                                    : ''}
                            </FormGroup>
                            <FormGroup submit>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                    <Button onClick={this.toggleDeleteModal}>Cancel</Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </ModalBody>

                </Modal>
                <Container>
                    <Row className="tabs-container">

                        <Label><b>Applications List</b></Label>
                        <Input onChange={(e) => this.handleSearchChange(e)} type="text" name="searchTerm" style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
                        <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Category</Button>
                    </Row>
                </Container>
                <ReactTable
                    pageSizeOptions={[10, 20, 50]}
                    data={searchTerm ? searchResult && searchResult : applications && applications}
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
                                    Created at
                                            </span>
                            ),
                            headerClassName: 'text-center',
                            sortable: false,
                            accessor: "created_at",
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
                                    </span>
                                    <span>
                                        <i style={{ color: 'red' }} className='fa fa-remove editProject' onClick={() => this.deleteModal(row)} />
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

const mapStateToProps = (state) => ({
    application: state.application.applications,
    done: state.application.done,
    errors: state.application.errors,
    loading: state.application.loading,
})

const mapDispatchToProps = (dispatch) => ({
    getList: () => { dispatch(getList()) },
    update: (payload) => { dispatch(update(payload)) },
    create: (payload) => { dispatch(create(payload)) },
    delete: (payload) => { dispatch(deleteAPPLICATION(payload)) }
    // search: () => { dispatch() }
})
export default connect(mapStateToProps, mapDispatchToProps)(Application);
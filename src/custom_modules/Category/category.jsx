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
import { getList, update, create, deleteCategory } from './categoryAction';
import Loader from '../../modules/loader';
import { createNotification } from '../../modules/notificationManager';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});



class Category extends React.Component {
    state = {
        id: null,
        categories: [],
        name: '',
        modalVisible: false,
        deleteModalVisible: false,
        editMode: false,
        deleteMode: false,
        searchResult: [],
        searchTerm: '',
        searchLoading: false,
        loading: false,
        error: '',
    }

    _onChange = (e) => {
        const { value } = e.target;
        this.setState({ name: value });
    };
    componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log(prevProps);
        if (prevProps !== this.props) {
            if (this.props.categories) {
                console.log(this.props.categories)
                this.setState({
                    categories: this.props.categories,
                    loading: this.props.loading,
                    error: this.props.errors,
                })
            }
        }

        if (prevProps.done === false && this.props.done === true) {
            this.setState({
                modalVisible: false,
                deleteModalVisible: false,
                name: '',
            })
        }

        if (prevProps.created === false && this.props.created === true) {
            createNotification('success', 'Created Successfully', 3000)
        }

        if (prevProps.updated === false && this.props.updated === true) {
            createNotification('success', 'Updated Successfully', 3000)
        }

        if (prevProps.deleted === false && this.props.deleted === true) {
            createNotification('success', 'deleted Successfully', 3000)
        }

    }

    disabledReturn = (value) => {
        console.log(value)
        return value === '' ? true : false;
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { name, id } = this.state;
        const data = new FormData()

        console.log(data);

        if (this.state.editMode === false && this.state.deleteMode === false) {
            data.append('category_name', name);
            this.props.create(data)
        }
        else {
            if (this.state.editMode === true && this.state.deleteMode === false) {
                data.append('id', id)
                data.append('category_name', name);
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
            error: '',
        })
    }

    deleteModal = (row) => {
        this.setState({
            id: row.original.id,
            deleteMode: true,
            deleteModalVisible: !this.state.deleteModalVisible,
            name: row.original.category_name,
        })
    }

    editModal = (row) => {
        this.setState({
            id: row.original.id,
            editMode: true,
            modalVisible: !this.state.modalVisible,
            name: row.original.category_name,
        })
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            editMode: false,
            deleteMode: false,
            name: '',
            error: '',
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
        const searchResult = this.state.categories.reduce((acc, category) => {
            if (category.category_name && category.category_name.match(regex)) {
                acc.push(category);
            }
            return acc;
        }, [])
        this.setState({ searchResult })
        setTimeout(() => this.setState({ searchLoading: false }), 500)
    }

    render() {
        // const { media } = this.props;
        const { deleteModalVisible, categories, modalVisible, searchTerm, searchResult } = this.state;
        console.log(categories);
        console.log(modalVisible)
        console.log(deleteModalVisible)

        return (
            <div className="content">
                {this.state.loading ? <Loader /> : ''}
                <Modal backdrop={true} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
                    <ModalHeader toggle={this.toggleModal}>Add category</ModalHeader>
                    <ModalBody>
                        <Formik

                            validationSchema={SignupSchema}
                            initialValues={{
                                name: '',
                            }}
                        >
                            {({ errors, handleChange, values, handleBlur }) => (

                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label for="name" sm={4}>Name</Label>
                                        <Col sm={8}>
                                            <Input type="text" value={this.state.name} onBlur={handleBlur} onChange={(e) => { handleChange(e); this._onChange(e) }} style={{ marginTop: '0px' }} name="name" id="fileName" placeholder="Category Name" />
                                            {
                                                errors.name
                                                    ? <p style={{ color: 'red' }}>{errors.name}</p>
                                                    : null
                                            }
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        {this.state.error
                                            ?
                                            <Fragment> <Label for="errors" sm={4}>Errors</Label>
                                                <Col sm={8}>
                                                    <Label className="text-danger">{this.state.error}</Label>
                                                </Col>
                                            </Fragment>
                                            : ''}
                                    </FormGroup>
                                    <FormGroup submit>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            {
                                                this.state.editMode
                                                    ?
                                                    <Button disabled={errors.name}>Edit</Button>
                                                    :
                                                    <Button disabled={this.disabledReturn(values.name) || errors.name}>Submit</Button>
                                            }
                                        </Col>
                                    </FormGroup>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>

                </Modal>

                <Modal backdrop={true} isOpen={deleteModalVisible} toggle={this.toggleDeleteModal} style={{ width: '100%' }} className='add-project-modal'>
                    <ModalHeader toggle={this.toggleDeleteModal}>delete Category</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="address" sm={10}>Are you sure you want to delete this Category <span style={{ color: 'red' }}>{this.state.name}</span> ?</Label>
                            </FormGroup>
                            <FormGroup row>
                                {this.state.error
                                    ?
                                    <Fragment> <Label for="address" sm={4}>Errors</Label>
                                        <Col sm={8}>
                                            <Label className="text-danger">{this.state.error}</Label>
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

                        <Label><b>Categories List</b></Label>
                        <Input onChange={(e) => this.handleSearchChange(e)} type="text" name="searchTerm" style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
                        <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Category</Button>
                    </Row>
                </Container>
                <ReactTable
                    pageSizeOptions={[10, 20, 50]}
                    data={searchTerm ? searchResult && searchResult : categories && categories}
                    columns={[
                        {
                            Header: () => (
                                <span className='table-header-style'>
                                    Name
                                </span>
                            ),
                            headerClassName: 'text-center',
                            sortable: false,
                            accessor: "category_name",
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
    categories: state.categories.categories,
    done: state.categories.done,
    created: state.categories.created,
    updated: state.categories.updated,
    deleted: state.categories.deleted,
    errors: state.categories.errors,
    loading: state.categories.loading,
})

const mapDispatchToProps = (dispatch) => ({
    getList: () => { dispatch(getList()) },
    update: (payload) => { dispatch(update(payload)) },
    create: (payload) => { dispatch(create(payload)) },
    delete: (payload) => { dispatch(deleteCategory(payload)) }
    // search: () => { dispatch() }
})
export default connect(mapStateToProps, mapDispatchToProps)(Category);
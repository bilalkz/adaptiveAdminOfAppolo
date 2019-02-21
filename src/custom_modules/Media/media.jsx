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

import axios from 'axios';
import classnames from 'classnames';
import ReactTable from "react-table";
import { connect } from 'react-redux';
import { getList, update, create, deleteMEDIA } from './mediaAction';
import Loader from '../../modules/loader';


class Media extends React.Component {
    state = {
        id:null,
        media: [],
        fileName: '',
        selectedFile:null,
        laoded:0,
        mediaFile: '',
        modalVisible:false,
        editMode:false,
        deleteMode:false,
        searchResult:[],
        searchTerm:'',
        searchLoading:false,
        deleteModalVisible:false,
        loading:false,
        
    }


      componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log(prevProps);
        if (prevProps !== this.props) {
            if (this.props.media) {
                console.log(this.props.media)
                this.setState({ 
                    media: this.props.media,
                    loading: this.props.loading,
                    modalVisible: false,
                    deleteModalVisible:false,
                })
            }
        }
    }

    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleselectedFile = event => {
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        
        const {fileName, selectedFile, id} = this.state;
        const data = new FormData()
       
        console.log(data);
        
        if (this.state.editMode === false && this.state.deleteMode === false) {
            data.append('name', fileName);
            data.append('file', selectedFile);  
            console.log(data);
            this.props.create(data)
        }
        else { 
            if(this.state.editMode === true && this.state.deleteMode === false) {
                data.append('id',this.state.id)
                data.append('name', fileName);
                data.append('file', selectedFile);
                console.log(data);
                this.props.update(data)
            }
        }

        if(this.state.deleteMode === true) {
            data.append('id',this.state.id)
            console.log('delete method')
            this.props.delete(data)
        }
      }

      componentDidMount() {
        this.props.getList();
      }

    editModal = (row) => {
        console.log(row);
        this.setState({
          id: row.original.id,
          editMode: true,
          modalVisible: !this.state.modalVisible,
          fileName: row.original.name,
        })
    }

    deleteModal = (row) => {
        this.setState({
            id: row.original.id,
            deleteMode: true,
            deleteModalVisible: !this.state.deleteModalVisible,
        })
    }
    
    toggleModal = () => {
        this.setState({
          modalVisible: !this.state.modalVisible,
          editMode: false,
          fileName: '',
        })
      }


      toggleDeleteModal = () => {
        this.setState({
            deleteModalVisible: !this.state.deleteModalVisible,
            deleteMode:false,
        })
      }
    
      openModal = () => {
        this.setState({
          modalVisible: true
        })
      }

      openDeleteModal = () => {
        this.setState({
          deleteModalVisible: true
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
        const searchResult = this.state.media.reduce((acc, media) => {
          if (media.name && media.name.match(regex)) {
            acc.push(media);
          }
          return acc;
        }, [])
        this.setState({ searchResult })
        setTimeout(() => this.setState({ searchLoading: false }), 500)
      }

    render() {
        // const { media } = this.props;
        const {media, modalVisible, deleteModalVisible, searchTerm, searchResult } = this.state;
        console.log(media);

        return (
            <div className="content">
                {this.state.loading ? <Loader /> : ''}
                <Modal backdrop={true} isOpen={modalVisible} toggle={this.toggleModal} style={{ width: '100%' }} className='add-project-modal'>
                    <ModalHeader toggle={this.toggleModal}>Add Media</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="name" sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input type="text" value={this.state.fileName} onChange={this.handleChange} style={{ marginTop: '0px' }} name="fileName" id="fileName" placeholder="File Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="address" sm={4}>File</Label>
                                <Col sm={8}>
                                    <label>Select File</label>
                                    {/* <Input value={this.state.file} type="file" onChange={this.handleChange} style={{ marginTop: '0px' }} name="file" id="file" placeholder="file" /> */}
                                    <Input type="File" onChange={this.handleselectedFile} style={{ marginTop: '0px', opacity:'1' }} name="file" id="file" placeholder="file" />
                                    <div> {Math.round(this.state.loaded,2) } %</div>
                                </Col>
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
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>

                 <Modal backdrop={true} isOpen={deleteModalVisible} toggle={this.toggleDeleteModal} style={{ width: '100%' }} className='add-project-modal'>
                    <ModalHeader toggle={this.toggleDeleteModal}>delete Media</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="address" sm={10}>Are you sure you want to delete this media <span style={{color:'red'}}>{this.state.fileName}</span> ?</Label>
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
                        
                                    Client List
                       
                        <Input onChange={(e) => this.handleSearchChange(e)} type="text" name="searchTerm" style={{ marginLeft: '10px', height: '36px', width: '30%', marginTop: '0px' }} placeholder="search" />
                        <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Media</Button>
                    </Row>
                </Container>
                <ReactTable
                    pageSizeOptions={[10, 20, 50]}
                    data={searchTerm ? searchResult && searchResult : media && media}
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
                                    File
                                            </span>
                            ),
                            headerClassName: 'text-center',
                            sortable: false,
                            accessor: "path",
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
                                    type
                                            </span>
                            ),
                            headerClassName: 'text-center',
                            sortable: false,
                            accessor: "type",
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
                                    created at
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
                                        <i style={{color:'red'}} className='fa fa-remove editProject' onClick={() => this.deleteModal(row)} />
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
    media: state.media.media,
    done: state.media.done,
    errors: state.media.errors,
    loading: state.media.loading,
})
  
  const mapDispatchToProps = (dispatch) => ({
    getList: () => { dispatch(getList()) },
    update: (payload) => { dispatch(update(payload)) },
    create: (payload) => { dispatch(create(payload)) },
    delete: (payload) => { dispatch(deleteMEDIA(payload))}
    // search: () => { dispatch() }
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Media);
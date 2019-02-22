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
import { getList, update, create, deleteItem } from './itemsAction';
import { getList as applicationList } from '../Application/appAction';
import { getList as mediaList } from '../Media/mediaAction';
import { getList as categoryList } from '../Category/categoryAction';
import Select from 'react-select';


import Loader from '../../modules/loader';



class Items extends React.Component {
  state = {
    id: null,
    items: [],
    applications: [],
    media: [],
    categories: [],
    application_id: null,
    media_id: null,
    media_type: '',
    category_ids: null,
    categoriesOptions: [],
    content: '',
    contentSource: '',
    categoryName: '',
    backgroundImage: '',
    modalVisible: false,
    deleteModalVisible: false,
    editMode: false,
    deleteMode: false,
    searchResult: [],
    searchTerm: '',
    searchLoading: false,
    loading: false,
  }

  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  optionBuilder = (categories) => {
    const data = [];
    categories.map((category, i) => {
      data.push({ value: category.id, label: category.category_name })
    })
    this.setState({ categoriesOptions: data })
  }

  handleChangeMulti = (category_ids) => {
    this.setState({ category_ids });
    console.log(category_ids)
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    console.log(prevProps);
    if (prevProps !== this.props) {
      if (this.props.items) {
        console.log(this.props.items)
        this.setState({
          items: this.props.items,
          applications: this.props.applicationsListRedux,
          media: this.props.mediaListRedux,
          categories: this.props.categoryListRedux,
          loading: this.props.loading,
          modalVisible: false,
          deleteModalVisible: false,
        }, () => this.optionBuilder(this.state.categories)
        )
      }
    }
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.name === 'media_id') {
      this.checkType(e.target.value);
    }
  }

  checkType = (id) => {
    console.log(this.state.media);
    const myId = parseInt(id);
    const searchResult = this.state.media.reduce((acc, media) => {
      if (media.id && media.id === myId) {
        acc.push(media);
      }
      return acc;
    }, [])
    console.log(searchResult[0].type);
    this.setState({ media_type: searchResult[0].type })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    const { id, content, media_type, category_ids, contentSource, application_id, media_id } = this.state;
    console.log(category_ids)
    if (this.state.editMode === false && this.state.deleteMode === false) {
      let key;
      if (media_type) {
        key = media_type === 'mp3' ? 'audio_id' : 'background_image_id';
      }
      let obj = {
        content: content,
        content_source: contentSource,
        application_id: application_id,
        category_ids,
        [key]: media_id
      }
      this.props.create(obj)
    }
    else {
      if (this.state.editMode === true && this.state.deleteMode === false) {
        const key = media_type === 'mp3' ? 'audio_id' : 'background_image_id';
        let obj = {
          id,
          content: content,
          content_source: contentSource,
          application_id: application_id,
          category_ids,
          [key]: media_id
        }
        this.props.update(obj)
      }
    }

    if (this.state.deleteMode === true) {
      data.append('id', this.state.id)
      this.props.delete(data)
    }
  }

  componentDidMount() {
    this.props.getList();
    this.props.applicationList();
    this.props.mediaList();
    this.props.categoryList();
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
    console.log(row);
    let key
    if (row.original.audio) {
      key = row.original.audio.type === 'mp3' ? row.original.audio.id : row.original.background_image_id;
    }
    this.setState({
      id: row.original.id,
      editMode: true,
      modalVisible: !this.state.modalVisible,
      content: row.original.content,
      contentSource: row.original.content_source,
      application_id: row.original.application_id,
      media_id: [key],
      category_ids: row.original.categories,
    })
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      editMode: false,
      deleteMode: false,
      content: '',
      contentSource: '',
      application_id: null,
      media_id: null,
      category_ids: null,
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
    console.log(this.state.application_id)
    // const { media } = this.props;
    const { deleteModalVisible, category_ids, items, modalVisible, searchTerm, searchResult } = this.state;
    console.log(items);
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
                <Label for="name" sm={4}>Content</Label>
                <Col sm={8}>
                  <Input type="text" value={this.state.content} onChange={this.handleChange} style={{ marginTop: '0px' }} name="content" placeholder="Content" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="name" sm={4}>Source</Label>
                <Col sm={8}>
                  <Input type="text" value={this.state.contentSource} onChange={this.handleChange} style={{ marginTop: '0px' }} name="contentSource" placeholder="Source" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="applicationType" sm={4}>Application Type</Label>
                <Col sm={8}>
                  <Input value={this.state.application_id} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="application_id" id="applicationType">
                    <option>Select</option>
                    {
                      this.state.applications && this.state.applications.map((app, i) => (
                        <option key={i} value={app.id}>{app.name}</option>
                      ))
                    }

                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="applicationType" sm={4}>Media Type</Label>
                <Col sm={8}>
                  <Input value={this.state.media_id} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="media_id" id="mediaType">
                    <option>Select</option>
                    {
                      this.state.media && this.state.media.map((media, i) => (
                        <option key={i} value={media.id}>{media.name}</option>
                      ))
                    }

                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="applicationType" sm={4}>Category Type</Label>

                <Col sm={8}>

                  <Select
                    isMulti
                    name="category_ids"
                    value={category_ids}
                    onChange={this.handleChangeMulti}
                    options={this.state.categoriesOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"

                  />
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
          <ModalHeader toggle={this.toggleDeleteModal}>delete Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label for="address" sm={10}>Are you sure you want to delete this Item <span style={{ color: 'red' }}>{this.state.content}</span> ?</Label>
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
            <Button className="btn-add" style={{ marginTop: '0px', borderRadius: '0' }} onClick={this.openModal}>Add Items</Button>
          </Row>
        </Container>
        <ReactTable
          pageSizeOptions={[10, 20, 50]}
          data={searchTerm ? searchResult && searchResult : items && items}
          columns={[
            {
              Header: () => (
                <span className='table-header-style'>
                  Content
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "content",
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
                  Source
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "content_source",
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
                  Categories
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "categories[0].category_name",
              Cell: row =>
                (
                  <div className='text-center'>
                    <span className='text-center'>
                      {row.value}{console.log(row.value)}
                    </span>
                  </div>
                )

            },
            {
              Header: () => (
                <span className='table-header-style'>
                  Application
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "application_id",
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
                  Media
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "background_image[0].path",
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
  items: state.items.items,
  done: state.application.done,
  errors: state.application.errors,
  loading: state.application.loading,
  applicationsListRedux: state.application.applications,
  mediaListRedux: state.media.media,
  categoryListRedux: state.categories.categories,

})

const mapDispatchToProps = (dispatch) => ({
  getList: () => { dispatch(getList()) },
  applicationList: () => { dispatch(applicationList()) },
  mediaList: () => { dispatch(mediaList()) },
  categoryList: () => { dispatch(categoryList()) },
  update: (payload) => { dispatch(update(payload)) },
  create: (payload) => { dispatch(create(payload)) },
  delete: (payload) => { dispatch(deleteItem(payload)) }
  // search: () => { dispatch() }
})

export default connect(mapStateToProps, mapDispatchToProps)(Items);
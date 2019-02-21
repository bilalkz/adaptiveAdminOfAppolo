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
    category_id: null,
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
        })
      }
    }
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.name === 'media_id') {
      this.checkType(e.target.value);
    }
    // else if (e.target.name === "category_id") {
    //   const { category_id } = this.state
    //   this.state.category_id = this.state.category_id.concat(e.target.value)
    //   this.setState({
    //     category_id: category_id
    //   })
    // }

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

    const { id, content, media_type, contentSource, application_id, media_id, category_id } = this.state;
    const data = new FormData()

    // console.log(data);

    if (this.state.editMode === false && this.state.deleteMode === false) {
      // var arr = [];
      // arr.push(application_id)

      // if (media_type === 'mp3') {
      //   data.append('audio_id', media_id)
      // } else {
      //   data.append('background_image_id', media_id);
      // }
      // data.append('content', content);
      // data.append('content_source', contentSource);
      // for (var i = 0; i < arr.length; i++) {
      //   data.append('category_ids[]', arr[i]);
      // }
      // data.append('application_id', application_id)
      // // data.append('category_ids', arr)

      // const check = () => {
      //   if (media_type === 'mp3') {
      //     return {
      //       audio_id: media_id
      //     }

      //   }
      //   return { background_image_id: media_id }
      // }

      const key = media_type === 'mp3' ? 'audio_id' : 'background_image_id';
      let obj = {
        content: content,
        content_source: contentSource,
        application_id: application_id,
        category_ids: [category_id],
        [key]: media_id
      }
      this.props.create(obj)
    }
    else {
      if (this.state.editMode === true && this.state.deleteMode === false) {
        // data.append('id', id)
        // if (media_type === 'mp3') {
        //   data.append('audio_id', media_id)
        // } else {
        //   data.append('background_image_id', media_id);
        // }
        // data.append('content', content);
        // data.append('content_source', contentSource);
        // data.append('application_id', application_id)
        // data.append('category_ids[]', category_id)

        const key = media_type === 'mp3' ? 'audio_id' : 'background_image_id';
        let obj = {
          id,
          content: content,
          content_source: contentSource,
          application_id: application_id,
          category_ids: [category_id],
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
    const key = row.original.media_type === 'mp3' ? row.original.audio_id : row.original.background_image_id;
    this.setState({
      id: row.original.id,
      editMode: true,
      modalVisible: !this.state.modalVisible,
      content: row.original.content,
      contentSource: row.original.content_source,
      application_id:row.original.application_id,
      media_id:row.original.
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
    console.log(this.state.application_id)
    // const { media } = this.props;
    const { deleteModalVisible, items, modalVisible, searchTerm, searchResult } = this.state;
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
                  <Input value={this.state.category_id} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="category_id" id="categoryType">
                    <option>Select</option>
                    {
                      this.state.categories && this.state.categories.map((category, i) => (
                        <option key={i} value={category.id}>{category.category_name}</option>
                      ))
                    }

                  </Input>
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
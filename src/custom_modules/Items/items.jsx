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
import { getAudioList, getImageList } from '../Media/mediaAction';
import { getList as categoryList } from '../Category/categoryAction';
import Select from 'react-select';
import { createNotification } from '../../modules/notificationManager';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Loader from '../../modules/loader';

const SignupSchema = {
  content: Yup.string()
    .min(3, 'Too Short!')
    .required('Required'),
  contentSource: Yup.string()
    .min(3, 'Too short!')
    .required('Required'),
  category_ids: Yup.array()
    .required('Required'),
};


class Items extends React.Component {
  state = {
    id: null,
    items: [],
    applications: [],
    audios: [],
    images: [],
    categories: [],
    application_id: null,
    image_id: null,
    audio_id: null,
    media_type: '',
    category_ids: [],
    category_id: null,
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
    error: '',
  }

  _onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  disabledReturn = (value, contentSource) => {
    console.log(value)
    return value === '' && contentSource === '' ? true : false;
  }

  optionBuilder = (categories) => {
    const data = [];
    categories.map((category, i) => {
      data.push({ value: category.id, label: category.category_name })
    })
    this.setState({ categoriesOptions: data })
  }

  seletecedOptionBuilder = (categories) => {

    const data = categories.map((category, i) => {
      console.log(category.category_name, category.id);
      return { value: category.id, label: category.category_name }
    })
    this.state.category_ids = data
  }

  selectedOption = (categories) => {
    const data = [];
    categories.map((category, i) => {
      data.push(category.value)
    })
    console.log(data);
    this.setState({ category_id: data })
  }

  handleChangeMulti = (category_ids) => {

    this.setState({ category_ids });
    const data = [];
    category_ids.map((category, i) => {
      data.push(category.value)
    })
    console.log(data);
    this.setState({ category_id: data })
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    console.log(prevProps);
    if (prevProps !== this.props) {
      if (this.props.items) {
        this.setState({
          items: this.props.items,
          applications: this.props.applicationsListRedux,
          media: this.props.mediaListRedux,
          audios: this.props.audioListRedux,
          images: this.props.imageListRedux,
          categories: this.props.categoryListRedux,
          loading: this.props.loading,
        }, () => this.optionBuilder(this.state.categories)
        )
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

    if (prevProps.done === false && this.props.done === true) {
      this.setState({
        modalVisible: false,
        deleteModalVisible: false,
        content: '',
        contentSource: '',
        application_id: null,
        image_id: null,
        audio_id: null,
        category_ids: null,
        deleteMode: false,
        editMode: false,
      })
    }

    if (prevProps.errors === '' && this.props.errors !== '') {
      this.setState({ error: this.props.errors })
    }

  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
    const { id, content, category_id, contentSource, application_id, image_id, audio_id } = this.state;
    if (this.state.editMode === false && this.state.deleteMode === false) {
      let obj = {
        content: content,
        content_source: contentSource,
        application_id: application_id,
        category_ids: category_id,
        background_image_id: image_id,
        audio_id: audio_id,
      }

      if (!application_id)
        delete obj.application_id

      if (!image_id)
        delete obj.background_image_id

      if (!audio_id)
        delete obj.audio_id

      this.props.create(obj)
    }
    else {
      if (this.state.editMode === true && this.state.deleteMode === false) {
        console.log(category_id)
        let obj = {
          id,
          content: content,
          content_source: contentSource,
          application_id: application_id,
          category_ids: category_id,
          background_image_id: image_id,
          audio_id: audio_id,
        }
        if (!application_id)
          delete obj.application_id

        if (!image_id)
          delete obj.background_image_id

        if (!audio_id)
          delete obj.audio_id

        this.props.update(obj)
      }
    }

    if (this.state.deleteMode === true && this.state.editMode === false) {
      data.append('id', this.state.id)
      this.props.delete(data)
    }
  }

  componentDidMount() {
    this.props.getList();
    this.props.applicationList();
    this.props.audioList();
    this.props.imageList();
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
      error: '',
      content: '',
    })
  }

  deleteModal = (row) => {
    this.setState({
      id: row.original.id,
      content: row.original.content,
      deleteMode: true,
      editMode: false,
      deleteModalVisible: true,
    })
  }

  editModal = (row) => {
    this.seletecedOptionBuilder(row.original.categories);
    const { category_ids } = this.state;
    this.selectedOption(category_ids)
    console.log(row.original)
    this.setState({
      error: '',
      id: row.original.id,
      editMode: true,
      modalVisible: !this.state.modalVisible,
      content: row.original.content,
      contentSource: row.original.content_source,
      application_id: row.original.application_id,
      image_id: row.original.background_image_id,
      audio_id: row.original.audio_id,
      category_ids,
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
      image_id: null,
      audio_id: null,
      category_ids: null,
      category_id: null,
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
    const searchResult = this.state.items.reduce((acc, item) => {
      if (item.content && item.content.match(regex)) {
        acc.push(item);
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
          {this.state.editMode
            ? <ModalHeader toggle={this.toggleModal}>Edit item</ModalHeader>
            : <ModalHeader toggle={this.toggleModal}>Add Item</ModalHeader>
          }
          <ModalBody>
            <Formik

              initialValues={this.state.editMode
                ? {
                  content: this.state.content,
                  contentSource: this.state.contentSource,
                  category_ids: this.state.category_ids,
                } : {
                  content: '',
                  contentSource: '',
                  category_ids: [],
                }}
              validationSchema={Yup.object().shape(SignupSchema)}
            >
              {({ errors, touched, handleChange, values, handleBlur }) => {
                console.log(errors, 'Seerat Ahmed Khan')
                return < Form onSubmit={this.handleSubmit} >
                  <FormGroup row>
                    <Label for="name" sm={4}>Content</Label>
                    <Col sm={8}>
                      <Input type="text" value={this.state.content} onBlur={handleBlur} onChange={(e) => { handleChange(e); this._onChange(e) }} style={{ marginTop: '0px' }} name="content" id="content" placeholder="Content" />
                      {
                        errors.content && touched.content
                          ? <p style={{ color: 'red' }}>{errors.content}</p>
                          : null
                      }
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="name" sm={4}>Source</Label>
                    <Col sm={8}>
                      <Input type="text" value={this.state.contentSource} onBlur={handleBlur} onChange={(e) => { handleChange(e); this._onChange(e) }} style={{ marginTop: '0px' }} name="contentSource" id="contentSource" placeholder="Source" />
                      {
                        errors.contentSource && touched.contentSource
                          ? <p style={{ color: 'red' }}>{errors.contentSource}</p>
                          : null
                      }
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
                    <Label for="applicationType" sm={4}>Image</Label>
                    <Col sm={8}>
                      <Input value={this.state.image_id} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="image_id" id="imageType">
                        <option>Select</option>
                        {
                          this.state.images && this.state.images.map((image, i) => (
                            <option key={i} value={image.id}>{image.name}</option>
                          ))
                        }

                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="applicationType" sm={4}>Audio</Label>
                    <Col sm={8}>
                      <Input value={this.state.audio_id} type="select" onChange={this.handleChange} style={{ marginTop: '0px' }} name="audio_id" id="audioType">
                        <option>Select</option>
                        {
                          this.state.audios && this.state.audios.map((audio, i) => (
                            <option key={i} value={audio.id}>{audio.name}</option>
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
                        id="category_ids"
                        value={category_ids}
                        onChange={this.handleChangeMulti}
                        options={this.state.categoriesOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                      {
                        errors.category_ids && touched.category_ids
                          ? <p style={{ color: 'red' }}>{errors.category_ids}{console.log(errors.category_ids, `category_ids`)}</p>
                          : null
                      }

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    {this.state.error
                      ?
                      <Fragment> <Label for="errors" sm={4}>Errors</Label>
                        <Col sm={8}>
                          <Label className="text-danger">{this.state.error.message}</Label>
                          {this.state.error.errors ? this.state.error.errors.category_ids.map(error => (
                            <Label className="text-danger">{error}</Label>
                          )) : null}
                        </Col>
                      </Fragment>
                      :
                      ''
                    }
                  </FormGroup>
                  <FormGroup submit>
                    <Col sm={{ size: 10, offset: 2 }}>
                      {
                        this.state.editMode
                          ?
                          <Button disabled={errors.content || errors.contentSource}>Update</Button>
                          :
                          <Button disabled={this.disabledReturn(values.content, values.contentSource) || errors.content || errors.contentSource}>Submit</Button>
                      }

                    </Col>
                  </FormGroup>
                </Form>
              }}
            </Formik>

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
                {this.state.error
                  ?
                  <Fragment> <Label for="address" sm={4}>Errors</Label>
                    <Col sm={8}>
                      {/* <Label className="text-danger">{this.state.error}</Label> */}
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

            <Label><b>Items List</b></Label>
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
              accessor: "categories",
              Cell: row =>
                (
                  <div className='text-center'>
                    <span className='text-center'>
                      {row.value.map(category => (<span>{category.category_name}, </span>))}
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
                  Audio
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "audio.name",
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
                  Image
                </span>
              ),
              headerClassName: 'text-center',
              sortable: false,
              accessor: "background_image.name",
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
  done: state.items.done,
  errors: state.items.errors,
  loading: state.items.loading,
  updated: state.items.updated,
  created: state.items.created,
  deleted: state.items.deleted,
  applicationsListRedux: state.application.applications,
  imageListRedux: state.media.imageList,
  audioListRedux: state.media.audioList,
  categoryListRedux: state.categories.categories,

})

const mapDispatchToProps = (dispatch) => ({
  getList: () => { dispatch(getList()) },
  applicationList: () => { dispatch(applicationList()) },
  imageList: () => { dispatch(getImageList()) },
  audioList: () => { dispatch(getAudioList()) },
  categoryList: () => { dispatch(categoryList()) },
  update: (payload) => { dispatch(update(payload)) },
  create: (payload) => { dispatch(create(payload)) },
  delete: (payload) => { dispatch(deleteItem(payload)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Items);
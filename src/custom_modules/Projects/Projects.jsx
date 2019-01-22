import React from "react";
// reactstrap components
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody
} from "reactstrap";
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { validate } from 'modules/validator';
import { reduxInput, reduxTextarea } from '../../components/reduxInput/reduxInput';
import { reduxDatepicker } from '../../components/reduxDatePicker/reduxDatepicker';
import moment from "moment";
import { connect } from 'react-redux'
import ReactTable from "react-table";
import { registerField, unregisterField } from 'redux-form';
const initialState = {
    modalVisible: false,
    modalHeader: ''
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.saveProject = this.saveProject.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount = () => {
        const { getList } = this.props;
        let payload = {
            id: 1
        }
        getList(payload);
        // const details = {
        //     username: 'testing test'
        // }
        // initialize(details)
    }

    componentWillReceiveProps = (nextprops) => {
        const { projectsList, getList } = nextprops;
        console.log(projectsList)
        const { callback } = projectsList;
        console.log(callback, 'test');
        if (callback == true) {
            console.log('Here')
            let payload = {
                id: 1
            }
            this.setState({
                modalVisible: false
            })
            getList(payload);
        }
    }

    toggle = (type, original) => {
        const { modalVisible } = this.state;
        const { reset, initialize } = this.props;
        console.log(type);
        if (type == 'Update project') {
            const details = {
                end_time: original.end_time,
                estimated_endtime: original.estimated_end_time,
                name: original.name,
                start_time: original.start_time,
            }
            initialize(details)
            this.setState({
                idToEdit:original.id,
            })
        }

        if (modalVisible == true) {
            const details = {
                end_time: null,
                estimated_endtime: null,
                name: null,
                start_time: null,
                short_description: null
            }
            reset('projectForm');
            initialize(details)
            this.setState({
                idToEdit:'',
                modalHeader: '',
                modalVisible: !modalVisible
            }, ()=>{
                console.log(this.state, 'testing')
            })
        } else {
            this.setState({
                modalVisible: !modalVisible,
                modalHeader: type
            }, ()=>{
                console.log(this.state, 'testing')
            })
        }
    }


    saveProject(values) {
        console.log('test', values, this.props)
        const { addProject, updateProject } = this.props;
        const {idToEdit} = this.state;
        let payload = { ...values };
        if (values.end_time && values.end_time != null) {
            payload = { ...payload, end_time: moment(values.end_time).format('YYYY-MM-DDTHH:mm') }
        }
        if (values.start_time && values.start_time != null) {
            payload = { ...payload, start_time: moment(values.start_time).format('YYYY-MM-DDTHH:mm') }
        }
        if (values.estimated_endtime && values.estimated_endtime != null) {
            payload = { ...payload, estimated_endtime: moment(values.estimated_endtime).format('YYYY-MM-DDTHH:mm') }
        }
        console.log("payload final", payload)
        payload = {
            ...payload, 'organization': 1
        }
        if(idToEdit == ''){
            addProject(payload)
        }else{
            payload = {
                ...payload, 'id':idToEdit
            }
            updateProject(payload)
        }
        
    }

    cancelSave = () => {
        const { reset } = this.props;
        this.setState({
            modalVisible: false
        }, () => reset()
        )
    }

    render() {
        console.log('Reports Accounts Owned', this.props)
        const { handleSubmit, pristine, submitting, hasStartTime, projectsList, reset } = this.props;
        const { modalVisible, modalHeader } = this.state;
        console.log(hasStartTime)
        return (
            <>
                <div className="content">
                    <Modal backdrop={false} isOpen={modalVisible} toggle={this.toggle} className='add-project-modal'>
                        <form onSubmit={handleSubmit(this.saveProject)}>
                            <ModalHeader className='' toggle={this.toggle}>{modalHeader}</ModalHeader>
                            <ModalBody>
                                <Row>
                                    <Col>
                                        <Field
                                            name="name"
                                            type="text"
                                            component={reduxInput}
                                            label="Project Name"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Field
                                            name="short_description"
                                            type="text"
                                            component={reduxTextarea}
                                            label="Short description"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Field
                                            name="start_time"
                                            showtime={true}
                                            component={reduxDatepicker}
                                            label="Start time"
                                            min={new Date()}
                                        />
                                    </Col>
                                </Row>
                                {hasStartTime && <Row>
                                    <Col>
                                        <Field
                                            name="end_time"
                                            showtime={true}
                                            component={reduxDatepicker}
                                            label="End time"
                                            min={new Date(hasStartTime)}
                                        />
                                    </Col>
                                </Row>}
                                {hasStartTime && <Row>
                                    <Col>
                                        <Field
                                            name="estimated_endtime"
                                            showtime={true}
                                            component={reduxDatepicker}
                                            label="Estimated end time"
                                            min={new Date(hasStartTime)}
                                        />
                                    </Col>
                                </Row>}
                            </ModalBody>
                            <ModalFooter>
                                <Button color='primary' type="submit" disabled={submitting}>
                                    Save
                                    </Button>
                                <Button color='danger' type="button" disabled={pristine || submitting} onClick={() => {
                                    this.cancelSave()
                                }}>
                                    Cancel
                                    </Button>
                            </ModalFooter>
                        </form>
                    </Modal>
                    <Row>
                        <Col>
                            <h3 className='remove-default-mt'>Projects</h3>
                        </Col>
                        <Col className='text-right'>
                            <Button onClick={() => {
                                reset('projectForm')
                                this.toggle('Add project')
                                }} color='Primary'>Add project</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <ReactTable
                                pageSizeOptions={[10, 20, 50]}
                                data={projectsList.list}
                                columns={[
                                    {
                                        Header: () => (
                                            <span className='table-header-style'>
                                                Project Name
                                            </span>
                                        ),
                                        accessor: "name"
                                    },
                                    {
                                        Header: () => (
                                            <span className='table-header-style'>
                                                Start time
                                            </span>
                                        ),
                                        accessor: "start_time",
                                        Cell: row => (
                                            <div className='text-left'>
                                                <span>
                                                    {row.value == null ? 'N/A' : row.value}
                                                </span>
                                            </div>
                                        )
                                    },
                                    {
                                        Header: () => (
                                            <span className='table-header-style'>
                                                End time
                                            </span>
                                        ),
                                        accessor: "end_time",
                                        Cell: row => (
                                            <div className='text-left'>
                                                <span>
                                                    {row.value == null ? 'N/A' : row.value}
                                                </span>
                                            </div>
                                        )
                                    },
                                    {
                                        Header: () => (
                                            <span className='table-header-style'>
                                                Estimated end time
                                            </span>
                                        ),
                                        accessor: "estimated_end_time",
                                        Cell: row => (
                                            <div className='text-left'>
                                                <span>
                                                    {row.value == null ? 'N/A' : row.value}
                                                </span>
                                            </div>
                                        )
                                    },
                                    {
                                        Header: () => (
                                            <span className='table-header-style'>
                                                Status
                                            </span>
                                        ),
                                        headerClassName: 'text-center',
                                        sortable: false,
                                        accessor: "project_status",
                                        Cell: row => (
                                            <div className='text-center'>
                                                <span className='text-center table-status-style' style={{ backgroundColor: row.value == 'running' ? 'green' : 'red' }}>
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
                                                    <i className='fa fa-edit editProject' onClick={() => this.toggle('Update project', row.original)} />
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
                </div>

            </>
        );
    }
}

let projectConnect = reduxForm({
    form: 'projectForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(Projects)

const selector = formValueSelector('projectForm') // <-- same as form name

projectConnect = connect(
    state => {
        console.log(state, 'connect')
        // can select values individually
        const hasStartTime = selector(state, 'start_time')
        return {
            hasStartTime
        }
    }
)(projectConnect)



export default projectConnect;


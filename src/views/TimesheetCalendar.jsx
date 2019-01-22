import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input
} from "reactstrap";
import ReactDatetime from "react-datetime";
import Select from 'react-select';
import CustomFormgroup from "../components/CustomFormgroup/CustomFormgroup";

const options = [
  { label: "Select", value: "" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const initialState = {
  addTimeModalVisible: false
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  toggleAddTimeModal = () => {
    const { addTimeModalVisible } = this.state;
    this.setState({
      addTimeModalVisible: !addTimeModalVisible
    })
  }

  render() {
    console.log('Calendar', this.props)
    const { selectedOption, addTimeModalVisible } = this.state;
    return (
      <>
        <div className="content">
        {/* Modal for get started directions */}
        <Modal isOpen={addTimeModalVisible} toggle={this.toggleAddTimeModal} className={'add-time-modal'}>
            <ModalHeader toggle={this.toggleAddTimeModal} className='text-left font-bold'>Add time</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm={12} md={7}>
                  <Row>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>USER</Label>
                        <p>Apploye</p>
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>PROJECT*</Label>
                        <Select
                          isSearchable
                          value={selectedOption}
                          options={options}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>TASK*</Label>
                        <Select
                          isSearchable
                          value={selectedOption}
                          options={options}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>TIME SPAN ( ASIA - KOLKATA +05:30 )*</Label>
                        <Row>
                          <Col md={6} sm={6}>
                            <FormGroup>
                              <Label className='gray-color'>FROM</Label>
                              <ReactDatetime
                                inputProps={{
                                  className: "form-control",
                                  placeholder: "Date Picker Here"
                                }}
                                timeFormat={false}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={6}>
                            <FormGroup>
                              <Label className='gray-color'>TO</Label>
                              <ReactDatetime
                                inputProps={{
                                  className: "form-control",
                                  placeholder: "Date Picker Here"
                                }}
                                timeFormat={false}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>DURATION*</Label>
                        <CustomFormgroup type="number" placeholder="Duration" name="duration" />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>NOTE*</Label>
                        <Input type="textarea" placeholder="What were you working on? (ex: Responding to customers)" name="note" />
                      </FormGroup>
                    </Col>
                    <Col md={12} sm={12}>
                      <FormGroup>
                        <Label className='gray-color'>REASON*</Label>
                        <Input type="textarea" placeholder="Why are you adding this time? (ex: Forgot to start timer)" name="reason" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} md={5}>
                  <Row>
                    <Col sm={12}>
                      <h5 className='remove-default-mt'>
                        FAQ
                  </h5>
                    </Col>
                    <Col sm={12}>
                      <p className='remove-default-mb font-bold'>
                        <span className='span-timesheet-daily'>Q: </span>
                        What happens if I enter time for a project that overlaps time worked on another project?
                  </p>
                      <p className=''>
                        <span className='span-timesheet-daily font-bold'>A: </span>
                        The new time will replace the time worked on the other project.
                  </p>
                    </Col>

                    <Col sm={12}>
                      <p className='remove-default-mb font-bold'>
                        <span className='span-timesheet-daily'>Q: </span>
                        How do I adjust which members of my team can modify their time?
                  </p>
                      <p className=''>
                        <span className='span-timesheet-daily font-bold'>A: </span>
                        There is a setting called "Modify Time Allowed" in the organization's settings.
                  </p>
                    </Col>

                    <Col sm={12}>
                      <p className='remove-default-mb font-bold'>
                        <span className='span-timesheet-daily'>Q: </span>
                        Why do I have to choose a task?
                    </p>
                      <p className=''>
                        <span className='span-timesheet-daily font-bold'>A: </span>
                        When a project's integration has the "Allow project tracking" setting disabled a task is required to add/edit manual time.
                  </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className='add-time-footer'>
            <Button color="secondary" onClick={this.toggleAddTimeModal}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.toggleAddTimeModal}>Save</Button>
          </ModalFooter>
          </Modal>
        <Row>
            <h3 className='remove-default-mt'>Weekly timesheet</h3>
          </Row>
          <Row>
            <Col xs="6" sm="6" md="6">
              <Row>
                <Col lg={5} md={4} sm={12}>
                  <Button outline color="default" className="customMade replace-border-default today-button-mt-weekly">
                    &larr;
                  </Button>
                  <Button outline color="default" className="customMade replace-border-default today-button-mt-weekly">
                    &rarr;
                  </Button>
                </Col>
                <Col lg={7} md={8} sm={12}>
                  <FormGroup>
                    <Label className='hideText'>Text</Label>
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Date Picker Here"
                      }}
                      timeFormat={false}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} className='text-left'>
                  <Button outline color="default" className="today-button-mt replace-border-default" style={{ alignSelf: 'flex-start' }}>
                    Today
                  </Button>
                </Col>
                <Col md={12} sm={12} className='text-left'>
                  <p><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Time totals may not match reports. <span className='span-timesheet-daily'>Why?</span></p>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                <Col md={6} sm={12}>
                  <FormGroup>
                    <Label>Source <i class="fa fa-question-circle-o" aria-hidden="true"></i></Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12}>
                  <FormGroup>
                    <Label>Timezone</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12}>
                  <FormGroup>
                    <Label>Member</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 6, offset: 6 }} md={{ size: 6, offset: 6 }}>
              <Row>
                <Col className='text-right'>
                  <Button color="primary" onClick={this.toggleAddTimeModal}>Add time</Button>
                  <Button className='replace-border-primary' outline color="primary">Export</Button>
                </Col>
              </Row>

            </Col>
          </Row>

          <div className="pagecontent tableActivityURL">
            Details
          </div>
        </div>
      </>
    );
  }
}

export default Calendar;


// Template calendar code

/* import React from "react";
// react component used to create a calendar with events on it
import BigCalendar from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

import { events } from "variables/general.jsx";

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null
    };
  }
  selectedEvent = event => {
    alert(event.title);
  };
  addNewEventAlert = slotInfo => {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  };
  addNewEvent = (e, slotInfo) => {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    this.setState({
      alert: null,
      events: newEvents
    });
  };
  hideAlert = () => {
    this.setState({
      alert: null
    });
  };
  eventColors = (event, start, end, isSelected) => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  };
  render() {
    return (
      <>
        <div className="content">
          {this.state.alert}
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card className="card-calendar">
                <CardBody>
                  <BigCalendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    defaultView="month"
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                    onSelectEvent={event => this.selectedEvent(event)}
                    onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                    eventPropGetter={this.eventColors}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Calendar; */

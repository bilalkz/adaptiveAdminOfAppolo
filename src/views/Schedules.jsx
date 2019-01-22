import React from "react";
// reactstrap components
import {  
  Button,  
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Table,
  UncontrolledCollapse  
} from "reactstrap";
import ReactDatetime from "react-datetime";

import Select from 'react-select';


const initialState = {

}

const options = [
  { label: "Select", value: "" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

class Schedules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    // console.log('URLs', this.props)
    const { selectedOption } = this.state
    return (
      <>
        <div className="content">
          <div className="contentHeader">
            
            <Row>
              <Col><h2 className="headerTop"> Schecules </h2></Col>
            </Row>
            
            <Row>
              

            <Col xs="6" sm="6" md="6">
              <Row>
                <Col md={4} sm={12}>
                  <FormGroup>
                    <Label>Project</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={12}>
                  <FormGroup>
                    <Label>Type</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={12}>
                  <FormGroup>
                    <Label>Team Member</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
                           {/* selected date */}
          <Col xs="6" sm="6" md="6">
              <Row>
                <Col lg={2} md={2} sm={12}>
                  <Button outline color="default" className="today-button-mt replace-border-default" style={{ alignSelf: 'flex-start' }}>
                    Today
                  </Button>
                </Col>
                <Col lg={6} md={6} sm={12}>
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
                <Col lg={2} md={2} sm={12}>
                  <Button outline color="default" className="today-button-mt replace-border-default" style={{ alignSelf: 'flex-start' }}>
                    Add Schedule
                  </Button>
                </Col>

               
              </Row>
            </Col>
                  
          </Row>
          </div>
          <div className="pagecontent tableActivityURL">
            <Table responsive striped className="">
              <thead>
                <tr>                  
                  <th>Weekly Schedule</th>
                  {/* <th>Site</th> */}
                  <th className="text-right">19-25 December,2018</th>            
                </tr>
              </thead>
              <tbody>
                {/* <tr>                 
                  <td colSpan="3">Tue, Nov 27, 2018 12:00 pm IST</td>                           
                </tr>
                <tr id="toggler"> 
                  <td>APPLOYEE - Development</td>
                  <td>dev.apployee.net</td>
                  <td className="text-right">0:28:35</td>
                 
                 
                </tr> */}
                <tr >
                    <td colSpan="3">
                    {/* <UncontrolledCollapse toggler="#toggler"> */}
                      <Table size="sm">
                        <thead>
                          <tr>                          
                            <th>People</th>
                            <th>19</th>
                            <th>20</th>
                            <th>21</th>
                            <th>22</th>
                            <th>23</th>
                            <th>24</th>
                            <th>25</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>                          
                            <td>John</td>
                            <td>19 Dec</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                          </tr>
                          <tr>                          
                          <td>Doe</td>
                            <td></td>
                            <td ></td>
                            <td ></td>
                            <td >No Schedule</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                          </tr>
                          <tr>                          
                          <td>Smith</td>
                            <td></td>
                            <td ></td>
                            <td > 21 Dec</td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                          </tr>
                        </tbody>
                      </Table>
                    {/* </UncontrolledCollapse>     */}
                   </td>     
                </tr>

                
               
              </tbody>
            </Table>
          </div>
        
        {/* Weekly Schedule */}
        </div>
      </>
    );
  }
}

export default Schedules;

import React from "react";
// reactstrap components
import {
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
  UncontrolledTooltip
} from "reactstrap";
import ReactDatetime from "react-datetime";

import Select from 'react-select';
import Map from '../custom_modules/Map/index'

const options = [
  { label: "Select", value: "" },
  { label: 'tanvir hasan', value: 1 },
  { label: "iqbal ahmed", value: 2 },
  { label: "ahsan habib", value: 3 },
  { label: "imran ahmed", value: 4 },
];

const initialState = {

}

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('locations', this.props)
    const { selectedOption } = this.state
    return (
      <>
        <div className="content">
          <div className="contentHeader">
              <Row>
                <Col><h2 className="headerTop"> Location activity </h2></Col>
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
                <Col md={4} sm={12} className='text-left'>
                <FormGroup>
                    <Label>Team Member</Label>
                    <Select
                      isSearchable
                      value={selectedOption}
                      options={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={12} className='text-left'>
                <Button outline  className="today-button-mt border-none" 
                style={{ 
                  alignSelf: 'flex-start',
                  background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)",
                  color:"white"
                  }}>
                    All notes
                  </Button>
                </Col>
              
              </Row>
            </Col>
            
            <Col sm={6}>
              <Row>
             
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

                <Col sm={6}>
                  <Button  className="today-button-mt" 
                  style={{ 
                    alignSelf: 'flex-start',
                    background: "linear-gradient(to right,  #33ccae 0%, #00a99d 100%)",
                    color:"white"
                    }}>
                    All notes
                  </Button>
                  </Col>
              </Row>
            </Col>
            </Row>
            </div>
            <div className="pagecontent ">
            &#x1F30F; <Map/>
          </div> 
          </div>
         
      </>
    );
  }
}

export default Locations;

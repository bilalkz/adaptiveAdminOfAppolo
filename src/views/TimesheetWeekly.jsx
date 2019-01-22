import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Progress
} from "reactstrap";
import img1 from 'assets/img/background.jpg'
import CustomButton from '../components/CustomButton/CustomButton';
import ReactDatetime from "react-datetime";
import Select from 'react-select';


const options = [
  { label: "Select", value: "" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

const list = [
  { project: 'Apploye', name: 'Hubstaff', time: '6', sessions: '5' },
];

const initialState = {

}

const headerRenderer = ({ dataKey, label }) => {
  return (
    <>
      <span title={label}>{label}</span>
    </>
  );
};


class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {


    const customStyles = {

      control: (base, state) => ({
        ...base,
        border:'none',
        background: "#e9edf4",
        marginTop:"20px",
        height:"50px",
        fontSize: "19px",
        fontFamiliy:'Myriad Pro-Regular',
        // match with the menu
        
        // Overwrittes the different states of border
        // borderColor: state.isFocused ? "yellow" : "green",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        // "&:hover": {
        //   // Overwrittes the different states of border
        //   borderColor: state.isFocused ? "red" : "blue"
        // }
      }),
      menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // beautify the word cut by adding a dash 
        hyphens: "auto",
        // kill the gap
        marginTop: 0,
        textAlign: "left",
        // prevent menu to scroll y
        wordWrap: "break-word"
      }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
      })
    };


    console.log('Activity Apps', this.props)
    const { selectedOption } = this.state;
    return (
      
        <div className="content">
          <Row>
            <h3 className='remove-default-mt'>7th days timesheet </h3>
          </Row>
          <Row>
          <Col md={4} sm={12} className=' col-md-offset-5'>
       
       <Row>
            <Col md={6} sm={12}>
            
              <FormGroup>
                <Label>Project</Label>
                <Select
                  isSearchable
                  value={selectedOption}
                  options={options}
                  className="text-left"
                  styles={customStyles}
                />
                
              </FormGroup>

            </Col>
            <Col md={6} sm={12} className='text-left'>
            <FormGroup>
                <Label>Team Member</Label>
                <Select
                  isSearchable
                  value={selectedOption}
                  options={options}
                  styles={customStyles}
                />
              </FormGroup>
            </Col>
          </Row> 
       </Col> 
            
       <Col md={8} sm={12}>
                <div>
                  <Row>

                    <div class="col-md-5-sm-2 offset-md-8">
                      
                      <FormGroup>
                      <Label className='hideText'>Text</Label>
                      <ReactDatetime
                        inputProps={{
                          className: "time_picker",
                          placeholder: "Date Picker Here",
                          
                       
                        }}

                        isClearable={true}
                        timeFormat={false}
                      />
                    </FormGroup>
                      </div>
                  </Row>
               </div>
                </Col>
            
          </Row>
              <Row>                
              <Col md="12">
                    <Card className="dashboardTable tableBigHeight">
                      <CardHeader>
                        <Row>
                          <Col md="6" xs="6">
                           <h2>Spacesoft </h2> 
                          </Col>
                        </Row>
                       
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Project</th>                              
                              <th> Sun Dec23</th> 
                              <th>Sun Dec23</th>                              
                              <th>Sun Dec23</th> 
                              <th>Sun Dec23</th>                              
                              <th>Sun Dec23</th>
                              <th>Sun Dec23</th>                              
                              <th>Sun Dec23</th> 
                              <th>Total</th>                                                           
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>

                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>  
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>  
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>  
                              <td>
                              <div>
                                08:05:53
                              </div>  
                              </td>                                                           
                            </tr>   
        
                            <tr>
                              <td>                                
                                <span className="mlr10">
                                APPLOYEE - Development 
                                </span>                               
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>   
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>   
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>   
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td> 
                              <td>
                              <div >
                                08:05:53
                              </div>  
                              </td>                                                          
                            </tr>                                                      
                          </tbody>                          
                        </Table>
                      </CardBody>
                      <CardFooter>
                        <hr />
                        <Col md="12" xs="12" className="text-right">
                        <CustomButton
                    classname="btn-round mb-3"
               
                    color="primary"
                    onClickHandler={() => {
                      // this.handleChangePassword();
                    }}
                    size="md"
                    text="See full timesheet"
                  />
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>                
                  </Row>
               

                
          
        </div>
      
    );
  }
}

export default Apps;

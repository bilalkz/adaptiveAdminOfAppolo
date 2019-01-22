import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import Select from 'react-select'
import { timezones } from 'utils/timezone';
import CustomFormgroup from '../../components/CustomFormgroup/CustomFormgroup';
import img1 from 'assets/img/login.jpg'
import logo from 'assets/img/logo/logo.png'
import { createNotification } from '../../modules/notificationManager';
import { password_validate } from 'utils/helper'
import Loader from 'modules/loader';
import {Link} from 'react-router-dom'

const initialState = {
  first_name:'',
  last_name:'',
  phone:'',
  email:'',
  username: '',
  password: '',
  confirmPassword: '',
  timezone: undefined,
  
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  componentWillMount = () => {
    const { history } = this.props;
    let token = localStorage.getItem('access_token')
    console.log(token);
    if (token != null) {
      history.push('/admin/dashboard')
    }
  }


  componentDidMount() {
    document.body.classList.toggle("register-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }

  componentWillReceiveProps = (nextProps) => {
    const { signup, resetRegister, history } = nextProps;
    if (signup.redirect) {
      history.push('/auth/login')
      resetRegister()
    }
  }


  onTextChange = (e, type) => {


    if(type == 'timezone'){
      this.setState({
        timezone:e
      })
      return;
    }
    const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    
  }

  handleRegister = (e) => {
    e.preventDefault();
    const { username, password, email, confirmPassword, first_name, last_name,  timezone } = this.state;
    console.log(email)
    const { register } = this.props;
    if(password_validate(password) === false){
      createNotification('error', 'Passwords must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character', 5000);
    } else if (password != confirmPassword) {
      createNotification('error', 'Passwords do not match', 3000);
    } else {
      let payload = {
        first_name:first_name,
        last_name:last_name,
        email: email,
        username: username,
        password: password,
        timezone:timezone.value
      }
      console.log('payload data',payload)
      register(payload)
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



    console.log('props in register', this.props)
    const { username, email, password, confirmPassword, first_name, last_name,timezone, phone } = this.state;
    const { signup } = this.props;
    return (
      <div className="register-page">
      {signup.isLoading && <Loader/>}

          <Row>
          <Col className="" lg="6" sm="12">
             
             <Card className="card d-none d-sm-block" id="leftImg" >
             <img src={img1} className="login-img" id="leftImg" />  
             </Card>
       
         </Col>
            <Col className="mr-auto ml-auto" lg="4" md="12">
            <Row>
               <Col lg="12" md="12" sm="12">
              <Card className="card-signup text-center">
                <Form className="form" onSubmit={e => this.handleRegister(e)}>
                  <CardHeader>
                  <Row>
                       <Col lg="12" md="12">
                      <img src={logo}/>
                       </Col>
                     </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                  <div className="col-sm-6 col-md-6">
                  <CustomFormgroup    required type="text" placeholder="First Name" onChangeHandler={e => this.onTextChange(e)} value={first_name} name="first_name"/>
                  </div>

                  <div class="col-sm-6 col-md-6">
                    <CustomFormgroup  required type="text" placeholder="Last Name" onChangeHandler={e => this.onTextChange(e)} value={last_name} name="last_name"/>
                    </div>
                    </Row>
                    <CustomFormgroup   type="text" placeholder="Phone Number" onChangeHandler={e => this.onTextChange(e)} value={phone} name="phone"/>
                    <FormGroup >
                          <Select
                           required
                          
                           placeholder="Select your time zone"
                            value={timezone}
                            onChange={e => this.onTextChange(e, 'timezone')}
                            options={timezones.map((item, index) => {
                            
                              return {
                                label: `${item.name} ${item.utc}`,
                                value: `${item.utc}`
                              }
                            })}
                            name='timezone'
                            styles={customStyles}
                          />
                        </FormGroup>
                    <CustomFormgroup  required type="email" placeholder="E-mail" onChangeHandler={e => this.onTextChange(e)} value={email} name="email"/>
                    <CustomFormgroup  required type="text" placeholder="Username" onChangeHandler={e => this.onTextChange(e)} value={username} name="username"/>
                    <CustomFormgroup  required type="password" placeholder="Password" onChangeHandler={e => this.onTextChange(e)} value={password} name="password" />
                    <CustomFormgroup  required type="password" placeholder="Confirm Password" onChangeHandler={e => this.onTextChange(e)} value={confirmPassword} name="confirmPassword"  />
                     
                  </CardBody>
                  <CardFooter>
                  <Button
                      className="btn mb-3 btn-primary register-button"
                      type='submit'
                      block
                    >
                      Create My Account
                  </Button>
                  <Row>
                      <Col className='text-center'>
                        <Link className='link-register'  to='/auth/login'>Back to Sign in?</Link>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </Card>
              </Col>
              </Row>
            </Col>
          </Row>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/jan-sendereks.jpg")})`
          }}
        />
      </div>
    );
  }
}

export default Register;

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
  Col
} from "reactstrap";
import CustomFormgroup from '../../components/CustomFormgroup/CustomFormgroup';
import { createNotification } from '../../modules/notificationManager';
import { password_validate } from 'utils/helper'
import Loader from 'modules/loader';
import {Link} from 'react-router-dom'

const initialState = {
  email:'',
  username: '',
  password: '',
  confirmPassword: '',
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


  onTextChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
      this.setState({
        [name]: value,
      });
    
  }

  handleRegister = (e) => {
    e.preventDefault();
    const { username, password, email, confirmPassword } = this.state;
    console.log(email)
    const { register } = this.props;
    if(password_validate(password) === false){
      createNotification('error', 'Passwords must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character', 5000);
    } else if (password != confirmPassword) {
      createNotification('error', 'Passwords do not match', 3000);
    } else {
      let payload = {
        email: email,
        username: username,
        password: password,
      }
      register(payload)
    }
  }

  render() {
    console.log('props in register', this.props)
    const { username, email, password, confirmPassword } = this.state;
    const { signup } = this.props;
    return (
      <div className="register-page">
      {signup.isLoading && <Loader/>}
        <Container>
          <Row>
            <Col className="mr-auto ml-auto" lg="4" md="6">
              <Card className="card-signup text-center">
                <Form className="form" onSubmit={e => this.handleRegister(e)}>
                  <CardHeader>
                    <CardTitle tag="h4">Register</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CustomFormgroup withIcon required type="text" placeholder="Username..." onChangeHandler={e => this.onTextChange(e)} value={username} name="username" iconClass="nc-icon nc-email-85" />
                    <CustomFormgroup withIcon required type="email" placeholder="E-mail..." onChangeHandler={e => this.onTextChange(e)} value={email} name="email" iconClass="nc-icon nc-email-85" />
                    <CustomFormgroup withIcon required type="password" placeholder="Password..." onChangeHandler={e => this.onTextChange(e)} value={password} name="password" iconClass="nc-icon nc-key-25" />
                    <CustomFormgroup withIcon required type="password" placeholder="Confirm Password..." onChangeHandler={e => this.onTextChange(e)} value={confirmPassword} name="confirmPassword" iconClass="nc-icon nc-key-25" />
                  </CardBody>
                  <CardFooter>
                  <Button
                      className="btn-round mb-3"
                      color="warning"
                      type='submit'
                      block
                    >
                      Register
                  </Button>
                  <Row>
                      <Col className='text-center'>
                        <Link className='link-color' to='/auth/login'>Already have an account?</Link>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
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

// export default Register;

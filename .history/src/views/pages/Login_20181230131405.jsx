import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CustomFormgroup from '../../components/CustomFormgroup/CustomFormgroup';
import CustomButton from '../../components/CustomButton/CustomButton';
import { createNotification } from '../../modules/notificationManager';
import Loader from 'modules/loader';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false
    };
  }
  //depricated function
  // 

  // componentWillMount() {
  //   const { history } = this.props;
  //   let token = sessionStorage.getItem('access_token')
  //   // console.log("Token",token);
  //   if (token != null) {
  //     history.push('/admin/dashboard')
  //   }
  // }

  componentDidMount() {
    document.body.classList.toggle("login-page");
    let rememberMe = sessionStorage.getItem('rememberMe')
    let username = sessionStorage.getItem('username')
    let password = sessionStorage.getItem('password')
    // console.log(rememberMe)
    if (rememberMe == 'true') {
      this.setState({
        username: username,
        password: password,
        rememberMe: true,
      })
    } else {
      this.setState({
        rememberMe: false
      })
    }
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  onTextChange = (e) => {
    const { name, value } = e.target;
    const { rememberMe } = this.state;
    // console.log(name, value);
    if (name == 'rememberMe') {
      this.setState({
        [name]: !rememberMe,
      }, () => {
        //console.log('onTextChange',this.state)
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  //depricated 
  // componentWillReceiveProps = (nextProps) => {
  //   const { loginRedirectReset, auth, history } = nextProps
  //   if (auth.redirect) {
  //     history.push('/admin/dashboard');
  //     loginRedirectReset()
  //   }
  // }
  //componentDidUpdate(prevProps, prevState, snapshot)
  // Todo: login page is not updating properly
  componentDidUpdate = (nextProps) => {
    const { loginRedirectReset, auth, history } = nextProps
    if (auth.redirect) {
      history.push('/admin/dashboard');
      loginRedirectReset()
    }
  }

  handleRememberMe = () => {
    const { rememberMe, username, password } = this.state;
    const { login } = this.props;
    if (rememberMe == true) {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('password', password)
      sessionStorage.setItem('rememberMe', rememberMe)
    } else {
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('password')
      sessionStorage.setItem('rememberMe', rememberMe)
    }
    let payload = {
      username: username,
      password: password
    }
    login(payload)

  }

  //TODO: match login unsername and password
  // get the token of successful login 
  // if success redirect to next pages
  handleLogin = () => {
    const { username, password } = this.state;
    if (username === '') {
      createNotification('error', 'Username required', 3000);
    } else if (password === '') {
      createNotification('error', 'Password required', 3000);
    } else {
      this.handleRememberMe()
    }
  }

  render() {
    //console.log('login render',this.props);
    const { auth } = this.props;
    const { username, password, rememberMe } = this.state;

    return (
      <div className="login-page">
        {auth.isLoading && <Loader />}
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form className="form">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <CustomFormgroup withIcon type="text" placeholder="Username" onChangeHandler={e => this.onTextChange(e)} value={username} name="username" iconClass="nc-icon nc-single-02" />
                    <CustomFormgroup withIcon type="password" placeholder="Password" onChangeHandler={e => this.onTextChange(e)} value={password} name="password" iconClass="nc-icon nc-key-25" />
                    <br />
                    <FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            checked={rememberMe}
                            type="checkbox"
                            name="rememberMe"
                            onChange={(e) => this.onTextChange(e)}
                          />
                          <span className="form-check-sign" />
                          Remember Me
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <CustomButton
                      classname="btn-round mb-3"
                      block
                      color="warning"
                      onClickHandler={() => {
                        // this.handleLogin()
                        //TODO: HADLE LOGIN 
                        this.handleLogin();
                      }}
                      size="md"
                      text="Login"
                    />
                    <Row>
                      <Col className='text-center'>
                        <Link className='link-color' to='/auth/forgot-password'>Forgot your password?</Link>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `url(${require("assets/img/bg/fabio-mangione.jpg")})`,
          }}
        />
      </div>
    );
  }
}

export default Login;

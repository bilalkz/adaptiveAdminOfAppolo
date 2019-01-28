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
import img1 from 'assets/img/login.jpg'
import logo from 'assets/img/logo/logo.png'
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

  // componentDidMount() {
  //   document.body.classList.toggle("login-page");
  //   let rememberMe = sessionStorage.getItem('rememberMe')
  //   let username = sessionStorage.getItem('username')
  //   let password = sessionStorage.getItem('password')
  //   // console.log(rememberMe)
  //   if (rememberMe == 'true') {
  //     this.setState({
  //       username: username,
  //       password: password,
  //       rememberMe: true,
  //     })
  //   } else {
  //     this.setState({
  //       rememberMe: false
  //     })
  //   }
  // }

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
  componentDidUpdate = (prevProps, prevState) => {
    const { loginRedirectReset, auth, history } = prevProps
    console.log('prevState', prevProps);
    if (this.props.auth.redirect) {
      if (this.props.auth.auth.user_profile !== 'undefined') {
        history.push('/admin/dashboard');
        loginRedirectReset()
      }
      else {
        history.push('/admin/my-profile');
        loginRedirectReset()
      }

    }
  }

  handleRememberMe = () => {
    const { rememberMe, username, password } = this.state;
    const { login } = this.props;
    console.log('handle remember', this.props);
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
    debugger
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
    console.log(this.state.username, this.state.password)
    const { auth } = this.props;
    console.log('authentication show', auth)
    const { username, password, rememberMe } = this.state;
    console.log('auth data', auth);
    return (
      <div className="login-page">
        {auth.isLoading && <Loader />}

        <Row>
          <Col className="" lg="6" sm="12">
            <Card className="card d-none d-sm-block" id="leftImg" >
              <img src={img1} className="login-img" id="leftImg" />
            </Card>


          </Col>

          <Col className="mr-auto ml-auto" lg="4" md="12">
            <Row>
              <Col lg="10" md="12" sm="12">
                <Card className="card-login text-center offset-md-2" style={{
                  marginTop: '170px'
                }}>
                  <Form className="form">
                    <CardHeader>
                      <CardHeader>
                        <Row>
                          <Col lg="12" md="12">
                            <img src={logo} />
                          </Col>
                        </Row>
                      </CardHeader>
                    </CardHeader>
                    <CardBody>
                      <CustomFormgroup type="text" placeholder="Username" onChangeHandler={e => this.onTextChange(e)} value={username} name="username" />
                      <CustomFormgroup type="password" placeholder="Password" onChangeHandler={e => this.onTextChange(e)} value={password} name="password"
                      />
                      <br />

                    </CardBody>
                    <CardFooter>
                      <CustomButton
                        classname=" mb-3 btn btn-md btn-block login-button"
                        onClickHandler={() => {
                          // this.handleLogin()
                          //TODO: HADLE LOGIN 
                          this.handleLogin();
                        }}
                        text="Sign in"
                      />
                      <Row>
                        <Col className='text-right' style={{
                          fontSize: '20px',
                          fontFamily: 'Myriad Pro-Regular'

                        }}>
                          <Link className='link-forgot' to='/auth/forgot-password'> Forgot password ?</Link>
                        </Col>
                      </Row>
                      <Row>
                        <Col className='text-center register' style={{
                          fontSize: '20px',
                          color: '#ccc',
                          fontFamily: 'Myriad Pro-Regular'
                        }}>
                          Don't Have an Account? Register<Link className='link-color' to='/auth/register'>here</Link>
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
            backgroundImage: `url(${require("assets/img/bg/fabio-mangione.jpg")})`,
          }}
        />
      </div>
    );
  }
}

export default Login;

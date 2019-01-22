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

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentWillMount() {
    const { history } = this.props;
    let token = localStorage.getItem('access_token')
    console.log(token);
    if (token != null) {
      history.push('/admin/dashboard')
    }
  }

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  onTextChange = (e) => {
    const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }
  

  componentWillReceiveProps = (nextProps) => {
    // const { loginRedirectReset, auth, history } = nextProps
    // if (auth.redirect) {
    //   history.push('/admin/dashboard');
    //   loginRedirectReset()
    // }
  }

  handleForgotPassword = () => {
    const { email } = this.state;
    const { forgotPassword } = this.props
    if (email === '') {
      createNotification('error', 'Email required', 3000);
    } else {
      let payload = {
        email:email
      }
      forgotPassword(payload)
    }
  }

  render() {
    console.log('props in forgot password', this.props);
    const { email } = this.state;
    const { forgot } = this.props;
    return (
      <div className="login-page">
      {forgot.isLoading && <Loader/>}
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Forgot Password</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <CustomFormgroup withIcon type="email" placeholder="E-mail..." onChangeHandler={e => this.onTextChange(e)} value={email} name="email" iconClass="nc-icon nc-email-85" />
                  </CardBody>
                  <CardFooter>
                    <CustomButton
                      classname="btn-round mb-3"
                      block
                      color="warning"
                      onClickHandler={() => {
                        this.handleForgotPassword();
                      }}
                      size="md"
                      text="Reset"
                    />
                    <Row>
                      <Col className='text-center'>
                        <Link className='link-color' to='/auth/login'>Back to login</Link>
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

export default ForgotPassword;

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
import { password_validate } from 'utils/helper';

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      confirmation_key:''
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
    const {match} = this.props;
    console.log(match)
    const {params:{
      confirmation_key
    }} = match
    this.setState({
      confirmation_key:confirmation_key
    })
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  onTextChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
      this.setState({
        [name]: value,
      });
    
  }

  componentWillReceiveProps = (nextProps) => {
    const {resetPasword, resetRedirectReset, history} = nextProps;
    if(resetPasword.redirect == true){
      resetRedirectReset();
      history.push('/auth/login')
    }
  }

  handleReset = () => {
    const { password, confirmPassword, confirmation_key } = this.state;
    const { reset } = this.props;
    if(password_validate(password) == false){
      createNotification('error', 'Passwords must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character', 3000)
    }else if(password != confirmPassword){
      createNotification('error', 'Passwords do not match', 3000)
    }else{
      let payload = {
        confirmation_key:confirmation_key,
        password:password
      }
      reset(payload)
    }
    
  }

  render() {
    console.log(this.props);
    const { confirmPassword, password } = this.state;
    return (
      <div className="login-page">
      <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Reset</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <CustomFormgroup withLabel type="password" placeholder="Password" onChangeHandler={e => this.onTextChange(e)} value={password} name="password"  />
                    <CustomFormgroup withLabel type="password" placeholder="Confirm Password" onChangeHandler={e => this.onTextChange(e)} value={confirmPassword} name="confirmPassword" />
                    <br />
                  </CardBody>
                  <CardFooter>
                    <CustomButton
                      classname="btn-round mb-3"
                      block
                      color="warning"
                      onClickHandler={() => {
                        this.handleReset();
                      }}
                      size="md"
                      text="Reset"
                    />
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

export default Reset;

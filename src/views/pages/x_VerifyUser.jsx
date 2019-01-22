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

class VerifyUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:''
    };
  }

  componentWillMount() {
    const { history } = this.props;
    let token = localStorage.getItem('access_token')
    console.log(token, 'test');
    if (token != null) {
      history.push('/admin/dashboard')
    }
  }

  componentDidMount() {
    const { match:{
        params
    }, verify } = this.props;
    let payload = {
        id:params.id
    }
    verify(payload)
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  componentWillReceiveProps = (nextProps) => {
    const { verifyUserReset, verifyUser, history } = nextProps
    if (verifyUser.redirect) {
      history.push('/auth/login');
      verifyUserReset()
    }
  }

  render() {
    console.log('this.props in verify', this.props);
    const {verifyUser} = this.props;
    return (
      <div className="login-page">
        <Container>
          <Row>
              <p>
                Verification process 
              </p>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default VerifyUser;

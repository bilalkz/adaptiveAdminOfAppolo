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

class SignupConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:''
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    const { match:{
        params
    }, verify } = this.props;
    let payload = {
        id:params.id
    }
    console.log(params.id)
    verify(payload)
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  componentWillReceiveProps = (nextProps) => {
    const { resetInvitation, signupConfirmation, history } = nextProps
    if (signupConfirmation.redirect) {
      history.push('/auth/login');
      resetInvitation()
    }
  }

  render() {
    console.log('this.props in invite Confirm', this.props);
    const {verifyUser} = this.props;
    return (
      <div className="login-page">
        <Container>
          <Row>
              <p>
                Confirming invitation
              </p>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default SignupConfirmation;

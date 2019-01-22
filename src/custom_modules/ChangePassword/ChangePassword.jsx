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
import { password_validate } from 'utils/helper'

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
     document.body.classList.toggle("login-page");
    console.log('Change_Password',document.body.classList.toggle("login-page"));
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

  handleChangePassword = () => {
    const {
      old_password,
      new_password,
      confirm_new_password
    } = this.state;
    const { changePasswordRequest } = this.props;
    if (old_password == '' && new_password == '' && confirm_new_password == '') {
      createNotification('error', 'All fields are required', 3000);
    } else if (password_validate(new_password) == false) {
      createNotification('error', 'Passwords must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character', 3000);
    } else if (new_password != confirm_new_password) {
      createNotification('error', 'Passwords do not match', 3000);
    } else if (old_password == '' || new_password == '' || confirm_new_password == '') {
      createNotification('error', 'All fields are required', 3000);
    } else {
      let payload = {
        old_password: old_password,
        new_password: new_password
      }
      changePasswordRequest(payload)
      this.setState({
        old_password: '',
        new_password: '',
        confirm_new_password: ''
      })
    }
  }

  render() {
    console.log('props in change password', this.props);
    const { old_password, new_password, confirm_new_password } = this.state;
    const { changePassword } = this.props;
    return (
      <>
        <div className="content">
          <div className="contentHeader">
            <Row>
              <Col md={12} sm={12}><h2 className="headerTop"> Change password </h2></Col>
            </Row>
            <div className='project-data-table'>
              <Row>
                <Col md={{size:6, offset:3}} sm={{size:6, offset:3}}>
                  <CustomFormgroup withLabel type="password" placeholder="Old password" onChangeHandler={e => this.onTextChange(e)} value={old_password} name="old_password" />
                  <CustomFormgroup withLabel type="password" placeholder="New password" onChangeHandler={e => this.onTextChange(e)} value={new_password} name="new_password" />
                  <CustomFormgroup withLabel type="password" placeholder="Confirm new password" onChangeHandler={e => this.onTextChange(e)} value={confirm_new_password} name="confirm_new_password" />
                </Col>
              </Row>
              <Row>
                <Col md={{size:6, offset:3}} sm={{size:6, offset:3}}>
                  <CustomButton
                    classname="btn-round mb-3"
                    block
                    color="warning"
                    onClickHandler={() => {
                      this.handleChangePassword();
                    }}
                    size="md"
                    text="Change password"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChangePassword;

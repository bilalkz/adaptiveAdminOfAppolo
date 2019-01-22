import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Row,
  Col,
  Label
} from "reactstrap";
import CustomFormgroup from '../components/CustomFormgroup/CustomFormgroup';
import FileBase64 from 'react-filebase64';
import Select from 'react-select'
import { timezones } from 'utils/timezone';
import defaultUser from 'assets/img/defaultUser.png';
import { createNotification } from 'modules/notificationManager';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      timezone: undefined,
      phone: '',
      image: '',
      files: '',
      updatedParams: {}
    };
    this.getFiles = this.getFiles.bind(this);
  }

  componentDidMount = () => {

    const { profileOperation, auth } = this.props;
    if (auth.auth.is_profile_created == 'True') {
      let payload = {
        method: 'GET'
      }
      profileOperation(payload)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { profile: {
      profileData
    } } = nextProps;
    if (Object.keys(profileData).length != 0) {
      this.setState({
        first_name: profileData.first_name,
        image: profileData.image,
        last_name: profileData.last_name,
        phone: profileData.phone,
        timezone: { label: profileData.timezone, value: profileData.timezone }
      })
    }
  }

  onTextChange = (e, type) => {
    const { updatedParams } = this.state
    if(type == 'timezone'){
      this.setState({
        timezone:e,
        updatedParams:{
          ...updatedParams,
          timezone:e.value
        }
      })
      return;
    }
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      updatedParams: {
        ...updatedParams,
        [name]: value
      }
    })
  }

  getFiles(files) {
    let uploadSize = files.size.split("");
    if(files.type != 'image/png' || files.type != 'image/jpeg' ){
      createNotification('error', 'Only jpeg or png image supported', 3000);
      return;
    }else if(parseInt(uploadSize[0]) > 2000){
      createNotification('error', 'Image size should be less than 2 MB', 3000);
      return;
    }else{
      this.setState({ files: files, image: files.base64 }, () => {
        console.log(this.state)
      })
    }
    
  }

  handleSave = () => {
    const {auth} = this.props;
    if(auth.auth.is_profile_created != 'True'){
      const { files, updatedParams } = this.state;
      const { profileOperation } = this.props;
      let payload = {
        ...updatedParams,
        method: 'PATCH'
      };
      if (files[0]) {
        payload = {
          ...payload,
          image: files[0].file
        }
      }
      profileOperation(payload)
      this.setState({
        updatedParams: {}
      })
    }else{
      const { files, updatedParams } = this.state;
      const { profileOperation } = this.props;
      let payload = {
        ...updatedParams,
        method: 'PATCH'
      };
      if (files[0]) {
        payload = {
          ...payload,
          image: files[0].file
        }
      }
      profileOperation(payload)
      this.setState({
        updatedParams: {}
      })
    } 
  }

  render() {
    console.log(this.props);
    const { first_name, last_name, phone, image, timezone } = this.state
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className='text-center'>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={image == '' ? defaultUser : image}
                      />
                    </a>
                  </div>
                  <div className='text-center' style={{ marginTop: `30px` }}>
                    <FileBase64
                      multiple={false}
                      onDone={this.getFiles.bind(this)} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <CustomFormgroup withLabel label={'Firstname'} type="text" placeholder="Firstname" onChangeHandler={e => this.onTextChange(e)} value={first_name} name="first_name" />
                      </Col>
                      <Col className="pr-1" md="6">
                        <CustomFormgroup withLabel label={'Lastname'} type="text" placeholder="Lastname" onChangeHandler={e => this.onTextChange(e)} value={last_name} name="last_name" />
                      </Col>

                      <Col className="pr-1" md="6">
                        <CustomFormgroup withLabel label={'Contact No.'} type="number" placeholder="Phone" onChangeHandler={e => this.onTextChange(e)} value={phone} name="phone" />
                      </Col>

                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <Label>Timezone</Label>
                          <Select
                            value={timezone}
                            onChange={e => this.onTextChange(e, 'timezone')}
                            options={timezones.map((item, index) => {
                              return {
                                label: `${item.name} ${item.gmt}`,
                                value: `${item.name} ${item.gmt}`
                              }
                            })}
                            name='timezone'
                          />
                        </FormGroup>
                      </Col>


                      <Col className="pr-1" md={{ size: 3, offset: 9 }}>
                        <Button onClick={() => {
                          this.handleSave()
                        }} color='primary'>Save</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

// export default UserProfile;

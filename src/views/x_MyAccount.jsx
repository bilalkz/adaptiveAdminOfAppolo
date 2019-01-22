import React from "react";
// reactstrap components
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Table,
  UncontrolledCollapse
} from "reactstrap";
import ReactDatetime from "react-datetime";

import Select from 'react-select';
import {Link} from 'react-router-dom';

const initialState = {

}

const options = [
  { label: "Select", value: "" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

class URLs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }
  render() {
    console.log('URLs', this.props)
    const { selectedOption } = this.state
    return (
      <>
        <div className="content">
          <div className="contentHeader">
            <h3>Manage your account</h3>
          </div>
          <div className="pagecontent">
            <ul>
              <li><Link to='/admin/my-profile'>Edit profile</Link></li>
              <li><Link to='/admin/change-password'>Change password</Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

// export default URLs;
